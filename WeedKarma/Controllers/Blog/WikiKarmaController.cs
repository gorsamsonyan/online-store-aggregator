using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using NToastNotify;
using Weed.Karma.BLL.Interfaces.Blog;
using Weed.Karma.BLL.Interfaces.Core;
using Weed.Karma.BLL.Interfaces.Storage;
using Weed.Karma.BLL.Interfaces.User;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities.Blog;
using Weed.Karma.Entities.Users;
using Weed.Karma.Models.Post;

namespace WeedKarma.Controllers.Blog
{


    public class WikiKarmaController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly IBlogPostsService blogPostsService;
        private readonly IBlobService blobService;
        private readonly IToastNotification toastNotification;
        private readonly IPostCommentsService postCommentsService;
        private readonly IUserService userService;
        private readonly IBlogPostViewsService blogPostViewsService;

        public WikiKarmaController(IConfigurationService configuration,
            IUnitOfWork unitOfWork,
            IMapper mapper,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IBlogPostsService blogPostsService,
            IBlobService blobService,
            IToastNotification toastNotification,
            IPostCommentsService postComments,
            IUserService userService,
            IBlogPostViewsService blogPostViewsService) : base(configuration, unitOfWork)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.mapper = mapper;
            this.blogPostsService = blogPostsService;
            this.blobService = blobService;
            this.toastNotification = toastNotification;
            this.postCommentsService = postComments;
            this.userService = userService;
            this.blogPostViewsService = blogPostViewsService;
        }

        [HttpGet]
        [Route("WikiKarma/{page?}")]
        public IActionResult Index(int? page)
        {
            int postsCount = blogPostsService.PostsCount();
            const int pageSize = 8;
            int pageNumber = (page ?? 1);
            int posts;
            if (postsCount % pageSize > 0)
            {
                posts = pageSize * pageNumber - 1;
            }
            else
            {
                posts = pageSize * pageNumber;
            }

            var top = blogPostsService.GetTopBlogPosts();
            var byDate = blogPostsService.GetBlogPosts(posts - pageSize, pageSize);
            var popular = blogPostsService.GetPupularPosts();


            BlogAllPostsViewModel postsVM = new BlogAllPostsViewModel
            {
                BlogTopPosts = mapper.Map<List<BlogTopPostsViewModel>>(top),
                BlogPostsByDate = mapper.Map<List<BlogTopPostsViewModel>>(byDate),
                BlogPopularPosts = mapper.Map<List<BlogTopPostsViewModel>>(popular)
            };

            PagingInfoViewModel pagingInfo = new PagingInfoViewModel
            {
                TotalPages = postsCount % pageSize > 0 ? postsCount / pageSize + 1 : postsCount / pageSize,
                CurrentPage = pageNumber,
                ItemsPerPage = pageSize,
                NextPage = pageNumber >= postsCount / pageSize + 1 ? postsCount / pageSize + 1 : pageNumber + 1,
                PreviousPage = pageNumber <= 1 ? 1 : pageNumber - 1
            };

            postsVM.PagingInfo = pagingInfo;

            return View(postsVM);
        }

        [Authorize(Roles = "Moderator")]
        [Route("WikiKarma/AddPost")]
        [HttpGet]
        public IActionResult AddPost()
        {
            return View();
        }

        [Authorize(Roles = "Moderator")]
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddPost(AddPostViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    User user = await userManager.FindByEmailAsync(User.Identity.Name);
                    Guid guid = Guid.NewGuid();
                    string dateTime = DateTime.Now.ToString("MM/dd/yyyy_hh-mm-ss");
                    var link = blobService.SaveBlobAsync(model.MainImgSrc, dateTime + "-" + guid, ".jpg");
                    BlogPosts blogPost = new BlogPosts
                    {
                        UserId = user.Id,
                        CategoryId = 0,
                        Description = model.Description,
                        CreatedDate = DateTime.UtcNow,
                        Title = model.Title,
                        IsBestPost = model.IsBestPost,
                        MainImgSrc = link + "/" + dateTime + "-" + guid + ".jpg"
                    };
                    blogPostsService.InsertBlogPost(blogPost);
                    Save();
                    toastNotification.AddSuccessToastMessage("Successfully");
                    return Redirect("/WikiKarma/AddPost");
                }
                catch (Exception e)
                {
                }
            }
            toastNotification.AddErrorToastMessage("Error");
            return Redirect("/WikiKarma/AddPost");

        }
        [AllowAnonymous]
        [HttpGet]
        public IActionResult Post(int id)
        {
            try
            {
                string currentUserIpAddress = userService.GetIPAddress();
                List<string> IPAddressies = blogPostViewsService.GetPostViewsIPByPostId(id);
                foreach (var item in IPAddressies)
                {
                    if (item != currentUserIpAddress)
                    {
                        PostViews postViews = new PostViews
                        {
                            PostId = id,
                            CreatedDate = DateTime.UtcNow,
                            UpdatedDate = DateTime.UtcNow,
                            IsDeleted = false,
                            UserIPAddress = currentUserIpAddress
                        };
                        blogPostViewsService.InsertPostViews(postViews);
                        Save();
                    }
                }

                BlogAllPostsViewModel postsVM = new BlogAllPostsViewModel
                {
                    BlogTopPosts = mapper.Map<List<BlogTopPostsViewModel>>(blogPostsService.GetTopBlogPosts()),
                    BlogPostsByDate = mapper.Map<List<BlogTopPostsViewModel>>(blogPostsService.GetBlogPosts()),
                    BlogPopularPosts = mapper.Map<List<BlogTopPostsViewModel>>(blogPostsService.GetPupularPosts())
                };


                SinglePostViewModel singlePostView = new SinglePostViewModel
                {

                    GetPostComments = mapper.Map<List<GetPostCommentsViewModel>>(postCommentsService.GetAllPostCommentsByPostId(id)),
                    PostViewModel = mapper.Map<BlogTopPostsViewModel>(blogPostsService.GetBlogPost(id)),
                    TopPostsViewModel = mapper.Map<BlogAllPostsViewModel>(postsVM),
                };
                foreach (var item in singlePostView.GetPostComments)
                {
                    item.NickName = userService.GetPostCommentUsersNickName(item.UserId);
                    if (item.NickName == null)
                    {
                        item.NickName = "User";
                    }
                }
                singlePostView.PostViewModel.ViewCount = blogPostViewsService.GetPostViewsCountByPostId(id);

                return View(singlePostView);
            }
            catch (Exception e)
            {

            }

            return View("Error");
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Comment(GetPostCommentsViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    User user = await userManager.FindByEmailAsync(User.Identity.Name);

                    PostComments comment = new PostComments
                    {
                        ImgSrc = model.ImgSrc,
                        BlogPostId = model.PostId,
                        Comment = model.Comment,
                        UserId = user.Id,
                    };
                    postCommentsService.InsertPostComment(comment);
                    await SaveAsync();
                    return Redirect("/WikiKarma/Post/" + model.PostId);

                }
                catch (Exception e)
                {
                }

            }
            return Redirect("/WikiKarma/Post/" + model.PostId);

        }
    }

}



