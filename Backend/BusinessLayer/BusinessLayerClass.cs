using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Core;
using ModelLayer;
using ModelLayer.ModelViews;
using RepositoryLayer;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MtgApiManager.Lib.Model;
using MtgApiManager.Lib.Service;

namespace BusinessLayer
{
    public class BusinessLayerClass
    {
        private readonly GameRepositoryLayer _gameRepositoryLayer;
        IMtgServiceProvider serviceProvider = new MtgServiceProvider();

        public BusinessLayerClass(GameRepositoryLayer gameRepositoryLayer)
        {
            _gameRepositoryLayer = gameRepositoryLayer;
        }

        public async Task<ActionResult<Collection>> AddToCollection(CollectionViewModel collection)
        {
            return await _gameRepositoryLayer.AddToCollection(collection);
        }

        public async Task<IEnumerable<Collection>> GetCollection(Guid id)
        {
            return await _gameRepositoryLayer.GetCollection(id);
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

        public async Task<IActionResult> TradeCards(TradeViewModel tradeViewModel)
        {
            return await _gameRepositoryLayer.TradeCards(tradeViewModel);
        }

        //todo
        public async Task<ActionResult<Player>> EditPlayer(Player player)
        {
            return await _gameRepositoryLayer.EditPlayer(player);
        }


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

        public async Task<ActionResult<Card>> GetCardById(string name)
        {
            ICardService service = serviceProvider.GetCardService();
            var result = await service.Where(x => x.Name, name).AllAsync();
            var temp = result.Value;
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

        public async Task<IEnumerable<Card>> GetBoosterPack(string pack,Guid playerid)
        {
            List<Card> boosterCards = new List<Card>();
            ISetService service = serviceProvider.GetSetService();
            var result = await service.GenerateBoosterAsync(pack);

            foreach(var card in result.Value)
            {
                for(int i =0; i< card.Types.Length;i++)
                {
                    if(card.Types[i]=="Creature")
                    {
                        Card card1 = new Card();
                        card1.cardId = (int)card.MultiverseId;
                        card1.cardName = card.Name;
                        card1.cardClass = card.Type;
                        card1.attackNumber = int.Parse(card.Power);
                        card1.defenceNumber = int.Parse(card.Toughness);
                        card1.imageURL = card.ImageUrl.ToString();
                        boosterCards.Add(card1);
                    }
                    else if(card.Types[i] == "Land")
                    {
                        Card card1 = new Card();
                        card1.cardId = (int)card.MultiverseId;
                        card1.cardName = card.Name;
                        card1.cardClass = card.Type;
                        card1.attackNumber = 0;
                        card1.defenceNumber = 0;
                        card1.imageURL = card.ImageUrl.ToString();
                        boosterCards.Add(card1);  
                    }
                }
            }

             await _gameRepositoryLayer.BoosterToCollection(boosterCards, playerid);

            return boosterCards;
        }
    }
}
