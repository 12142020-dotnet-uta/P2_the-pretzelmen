
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLayer;
using Microsoft.AspNetCore.Mvc;
using ModelLayer;
using ModelLayer.ModelViews;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendAPI.Controllers
{
    [Route("api/collection")]
    [ApiController]
    public class CollectionController : ControllerBase
    {
        private readonly BusinessLayerClass _businessLayer;

        public CollectionController(BusinessLayerClass businessLayer)
        {
            _businessLayer = businessLayer;
        }

        [HttpGet]
        [Route("collection/{playerId}")]
        public async Task<IEnumerable<Collection>> GetCollection(Guid playerId)
        {
            return await _businessLayer.GetCollection(playerId);
        }

        //[HttpPost]
        //[Route("add")]
        //public async Task<ActionResult<Collection>> AddToCollection(CollectionViewModel collection)
        //{
        //    return await _businessLayer.AddToCollection(collection);
        //}
    }
}