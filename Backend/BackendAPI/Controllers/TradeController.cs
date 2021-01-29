using BusinessLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ModelLayer;
using ModelLayer.ModelViews;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendAPI.Controllers
{
    [Route("api/trade")]
    [ApiController]
    public class TradeController : ControllerBase
    {
        private readonly BusinessLayerClass _businessLayer;

        public TradeController(BusinessLayerClass businessLayer)
        {
            _businessLayer = businessLayer;
        }

        [HttpGet]
        [Route("GetAllTrades")]
        public async Task<IEnumerable<Trade>> GetAllTrades()
        {
            return await _businessLayer.GetAllTrades();
        }

        [HttpGet]
        [Route("MyTrades")]
        public async Task<IEnumerable<Trade>> getMyTrades(Guid playerid)
        {
            return await _businessLayer.getMyTrades(playerid);
        }

        [HttpPost]
        [Route("PostTrade")]
        public async Task<ActionResult<Trade>> setUpATrade(TradeViewModel tradeViewModel)
        {
            return await _businessLayer.setUpATrade(tradeViewModel);
        }

        [HttpPut]
        [Route("PostOffer")]
        public async Task<ActionResult<Trade>> setOfferToTrade(TradeViewModel tradeView)
        {
            return await _businessLayer.setOfferToTrade(tradeView);
        }

        [HttpPut]
        [Route("AcceptOffer")]
        public async Task<ActionResult> acceptOffer(TradeViewModel id)
        {
            var temp = await _businessLayer.acceptOffer(id);
            if(temp == null)
            {
                return Ok();
            }
            else
            {
                return NoContent();
            }
        }
    }
}
