using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ModelLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using ModelLayer.ModelViews;


namespace RepositoryLayer
{
    
    public class GameRepositoryLayer
    {
        private readonly GameContext _gameContext;

        public GameRepositoryLayer(GameContext game)
        {
            _gameContext = game;
        }

        public async Task<IEnumerable<Player>> GetAllPlayers()
        {
            return await _gameContext.players.Select(x => x).ToListAsync();
        }

        public async Task<ActionResult<Player>> LoginPlayer(string username,string password)
        {
            var player = await _gameContext.players.Where(x => x.userName == username && x.password == password).FirstOrDefaultAsync();
            if(player == null)
            {
                return null;
            }
            player.login = true;
            await _gameContext.SaveChangesAsync();

            return player;
        }

        public async Task<ActionResult> Logout(Guid id)
        {
            var logingOut =  await _gameContext.players.Where(x => x.playerId == id).FirstOrDefaultAsync();
            logingOut.login = false;
            await _gameContext.SaveChangesAsync();
            return null;
        }

        public async Task<ActionResult<Player>> CreatePlayer(PlayerViewModel player)
        {
            Player temp = new Player()
            {
                userName = player.userName,
                password = player.password,
                wins = 0,
                losses = 0,
                Tokens = 10000
            };
            _gameContext.players.Add(temp);
            await _gameContext.SaveChangesAsync();
            var check = await _gameContext.players.Where(x => x.playerId == temp.playerId).FirstOrDefaultAsync();
            if(check != null)
            {
                Collection collection = new Collection()
                {
                    collectionHolder = check.playerId,
                    quantity = 0
                };
                _gameContext.collections.Add(collection);

                /*Card anew = new Card()
                {
                    cardId = 442185,
                    cardName = "Animar, Soul of Elements",
                    cardClass = "Legendary Creature — Elemental",
                    attackNumber = 1,
                    defenceNumber = 1,
                    imageURL = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442185&type=card"
                };
                collection.cards.Add(anew);*/
                await _gameContext.SaveChangesAsync();
                return check;
            }
            
            return null;
        }

        public async Task<IActionResult> DeletePlayer(Guid id)
        {
            var tempCheck = await _gameContext.players.Where(x => x.playerId == id).FirstOrDefaultAsync();
            if(tempCheck == null)
            {
                return NotFoundResult();
            }
            
            Player temp = tempCheck;
            _gameContext.players.Remove(temp);
            await _gameContext.SaveChangesAsync();
            return null;
        }

        private IActionResult NotFoundResult()
        {
            throw new NotImplementedException();
        }
    }
}
