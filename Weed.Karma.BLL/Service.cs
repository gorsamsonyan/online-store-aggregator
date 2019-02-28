using Weed.Karma.BLL.Interfaces;
using Weed.Karma.DAL.Infrastructure;
using Weed.Karma.Entities;

namespace Weed.Karma.BLL
{
    public abstract class Service<T> : IService<T>
        where T : class, IEntityBase
    {
        protected Service(IRepository<T> repository)
        {
            Repository = repository;
        }
        protected IRepository<T> Repository { get; private set; }
    }
}