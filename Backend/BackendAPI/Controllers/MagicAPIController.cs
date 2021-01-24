using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ModelLayer;
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

        IMtgServiceProvider serviceProvider = new MtgServiceProvider();
        
        [HttpGet]
        [Route("cardById")]
        public async Task<ActionResult<Card>> GetCardById(int id)
        {
            ICardService service = serviceProvider.GetCardService();
            var result = await service.FindAsync(id);
            if (result.IsSuccess)
            {
                var value = result.Value;
                Card card = new Card()
                {
                    cardId = (int)value.MultiverseId,
                    cardName = value.Name,
                    cardClass = value.Type,
                    attackNumber = int.Parse(value.Power),
                    defenceNumber = int.Parse(value.Toughness),
                    imageURL = value.ImageUrl.ToString()
                };

                return card;
            }
            else
            {
                var exception = result.Exception;
                return null;
            }
        }

        [HttpGet]
        [Route("cardByName")]
        public async Task<ActionResult<Card>> GetCardById(string name)
        {
            ICardService service = serviceProvider.GetCardService();
            var result = await service.Where(x => x.Name,name).AllAsync();
            var temp =  result.Value;
            Card card = new Card();
            foreach (var i in temp)
            {
                if (i.Name == name)
                {
                    card.cardId = (int)i.MultiverseId;
                    card.cardName = i.Name;
                    card.cardClass = i.Type;
                    card.attackNumber = int.Parse(i.Power);
                    card.defenceNumber = int.Parse(i.Toughness);
                    card.imageURL = i.ImageUrl.ToString();
                }
                return card;
            }

            return card;
        }

        [HttpGet]
        [Route("BoosterPack")]
        public async Task<ActionResult<Card>> GetBoosterPack()
        {
            return null;
        }
    }
}
