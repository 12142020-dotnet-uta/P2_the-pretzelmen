using BusinessLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ModelLayer;
using ModelLayer.ModelViews;
using MtgApiManager.Lib.Model;
using MtgApiManager.Lib.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendAPI.Controllers
{
    [Route("api/MagicAPI")]
    [ApiController]
    public class MagicAPIController : ControllerBase
    {
        private readonly BusinessLayerClass _businessLayer;

        public MagicAPIController(BusinessLayerClass businessLayer)
        {
            _businessLayer = businessLayer;
        }

        [HttpGet]
        [Route("cardById")]
        public async Task<ActionResult<Card>> GetCardById(int id)
        {
            return await _businessLayer.GetCardById(id);
        }

        [HttpGet]
        [Route("cardByName")]
        public async Task<ActionResult<Card>> GetCardById(string name)
        {
            return await _businessLayer.GetCardById(name);
        }

        [HttpGet]
        [Route("BoosterPack")]
        public async Task<IEnumerable<Card>> GetBoosterPack(BoosterForPlayer boosterForPlayer)
        {
            return await _businessLayer.GetBoosterPack(boosterForPlayer.setid,boosterForPlayer.playerBoughtPack);
        }
    }
}
