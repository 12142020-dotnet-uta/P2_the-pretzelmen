using Microsoft.AspNetCore.Mvc;
using ModelLayer;
using BusinessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ModelLayer.ModelViews;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendAPI.Controllers
{
    [Route("api/player")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly BusinessLayerClass _businessLayer;

        public PlayerController(BusinessLayerClass businessLayer)
        {
            _businessLayer = businessLayer;
        }

        [HttpGet]
        [Route("GetPlayers")]
       // [Authorize]
        public async Task<IEnumerable<Player>> GetPlayers()
        {
            return await _businessLayer.GetAllPlayers();

        }

        [HttpGet]
        [Route("Login")]
        public async Task<ActionResult<Player>> Login(PlayerViewModel playerViewModel)
        {
            var check = await _businessLayer.LoginPlayer(playerViewModel.userName,playerViewModel.password);
            if(check == null)
            {
                return CreatedAtAction("CreatePlayer", playerViewModel);
            }
            return check;

        }

        [HttpPut]
        [Route("Logout")]
        public async Task<ActionResult<Player>> Logout(Player player)
        {
            var temp = await _businessLayer.LogoutPlayer(player.playerId);
            if(temp == null)
            {
                return CreatedAtAction("Login", temp);
            }
            return NoContent();
        }

        //[HttpPut]
        //[Route("EditPlayer")]
        //public async Task<ActionResult<Player>> EditPlayer()
        //{
        //    var temp = await _businessLayer.LogoutPlayer(player.playerId);

        //}

        [HttpPost]
        [Route("CreatePlayer")]
        public async Task<ActionResult<Player>> CreatePlayer(PlayerViewModel player)
        {
            var temp2 = await _businessLayer.CreatePlayer(player);

            return CreatedAtAction("Login", new { username = player.userName, pass = player.password },temp2);
        }


        [HttpDelete]
        [Route("DeletePlayer")]
        public async Task<IActionResult> DeletePlayer(Player id)
        {
            var isDone = await _businessLayer.DeletePlayer(id.playerId);

            return NoContent();
        }
    }
}
