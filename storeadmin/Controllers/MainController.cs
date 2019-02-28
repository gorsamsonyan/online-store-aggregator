using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using storeadmin.ScaffoldModels;

namespace storeadmin.Controllers
{
    public class MainController : BaseController
    {
        public MainController(weedkarmaContext context) : base(context)
        {
            //hly vor esa sra mej run ara esel piti zarangem ay tenc error er berum ha hima sax piti jaranges es base-ic vori mej ed informacian cuyc bdi ta ha pastoren weed karmayumel piti grem es weedkarmayi mej inchi hamar? vor nkary kardaberi cuyc ta te du drel es che chem dre,bayc el @senc petq e?eli sax ejerum bdi cuyc ta? de ete adminkum nkati unes piti inqy mejum cuyc ta u verj mnacacy beji bodin a poxumk isk weed karamyum xanutu ejy emnak ete menak xanuti ejum e imast chka,tox menak ed eji mej drvi,el base controller-i imast chi lini,@stex vor bolor texerum petq er cuyc tal,dra hamar chisht@ base--ov er ha hima es stexi sax controllernery piti zarnagem...ha baci loginic voncvor de ha inqy mez petq chi inq lav axpers esel test anenq u tesneq
        }

        public IActionResult Index()
        {
           
            return View();
        }
    }
}