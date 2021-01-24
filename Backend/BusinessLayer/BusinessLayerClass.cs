using Microsoft.AspNetCore.Mvc;
using ModelLayer;
using ModelLayer.ModelViews;
using RepositoryLayer;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer
{
    public class BusinessLayerClass
    {
        private readonly GameRepositoryLayer _gameRepositoryLayer;

        public BusinessLayerClass(GameRepositoryLayer gameRepositoryLayer)
        {
            _gameRepositoryLayer = gameRepositoryLayer;
        }


        public async Task<IEnumerable<Player>> GetAllPlayers()
        {
            return await _gameRepositoryLayer.GetAllPlayers();
        }
        [HttpGet]
        public async Task<ActionResult<Player>> LoginPlayer(string username, string password)
        {
            return await _gameRepositoryLayer.LoginPlayer(username, password);
        }

        public async Task<ActionResult> LogoutPlayer(Guid id)
        {
            return await _gameRepositoryLayer.Logout(id);
        }

        [HttpPost]
        public async Task<ActionResult<Player>> CreatePlayer(PlayerViewModel player)
        {
            return await _gameRepositoryLayer.CreatePlayer(player);
        }

        public async Task<IActionResult> DeletePlayer(Guid id)
        {
            return await _gameRepositoryLayer.DeletePlayer(id);
        }
    }
}
