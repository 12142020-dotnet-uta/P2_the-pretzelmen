using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using Xunit;

using BackenAPI;
using ModelLayer;
using ModelLayer.ModelViews;
using IntegrationTest.Utility;

namespace IntegrationTest
{
    public class CollectionTests : IClassFixture<GameFactory<Startup>>
    {
        private GameFactory<Startup> Factory;
        public CollectionTests(GameFactory<Startup> factory) {
            Factory = factory;
        }
        [Fact]
        public async void TestClientGetCardIdOrName()
        {
            var client = Factory.CreateClient();
            var findCardIdRequest = new HttpRequestMessage(HttpMethod.Get, "/api/MagicAPI/cardById");
            findCardIdRequest.Headers.TryAddWithoutValidation("Content-Type", "application/json");
            findCardIdRequest.Content = JsonContent.Create(123);
            var findCardIdResponse = await client.SendAsync(findCardIdRequest);
            Assert.True(findCardIdResponse.IsSuccessStatusCode);

            var findCardNameRequest = new HttpRequestMessage(HttpMethod.Get, "/api/MagicAPI/cardByName?name=khans");
            findCardNameRequest.Headers.TryAddWithoutValidation("Content-Type", "application/json");
            var findCardNameResponse = await client.SendAsync(findCardNameRequest);
            Assert.True(findCardNameResponse.IsSuccessStatusCode);
        }
        [Fact]
        public async void TestClientAddBooster()
        {
            var client = Factory.CreateClient();
            var registerRequest = new HttpRequestMessage(HttpMethod.Post, "/api/player/CreatePlayer");
            registerRequest.Headers.TryAddWithoutValidation("Content-Type", "application/json");
            registerRequest.Content = JsonContent.Create(new PlayerViewModel() {
                userName = "tylercadena",
                password = "revature"
            });
            var registerResponse = await client.SendAsync(registerRequest);
            var loginRequest = new HttpRequestMessage(HttpMethod.Get, "/api/player/Login");
            loginRequest.Headers.TryAddWithoutValidation("Content-Type", "application/json");
            loginRequest.Content = JsonContent.Create(new PlayerViewModel() {
                userName = "tylercadena",
                password = "revature"
            });
            var loginResponse = await client.SendAsync(loginRequest);
            var thePlayer = await loginResponse.Content.ReadFromJsonAsync<Player>();
            var addBoosterRequest = new HttpRequestMessage(HttpMethod.Get, "/api/MagicAPI/BoosterPack");
            addBoosterRequest.Headers.TryAddWithoutValidation("Content-Type", "application/json");
            addBoosterRequest.Content = JsonContent.Create(new BoosterForPlayer() {
                playerBoughtPack = thePlayer.playerId,
                setid = "ktk"
            });
            var addBoosterResponse = await client.SendAsync(addBoosterRequest);
            Assert.True(addBoosterResponse.IsSuccessStatusCode);
        }
        // [Fact]
        // public async void TestClientCollectionAddGet()
        // {
        //     var client = Factory.CreateClient();
        //     var registerRequest = new HttpRequestMessage(HttpMethod.Post, "/api/player/CreatePlayer");
        //     registerRequest.Headers.TryAddWithoutValidation("Content-Type", "application/json");
        //     registerRequest.Content = JsonContent.Create(new PlayerViewModel() {
        //         userName = "tylercadena",
        //         password = "revature"
        //     });
        //     var registerResponse = await client.SendAsync(registerRequest);
        //     var loginRequest = new HttpRequestMessage(HttpMethod.Get, "/api/player/Login");
        //     loginRequest.Headers.TryAddWithoutValidation("Content-Type", "application/json");
        //     loginRequest.Content = JsonContent.Create(new PlayerViewModel() {
        //         userName = "tylercadena",
        //         password = "revature"
        //     });
        //     var loginResponse = await client.SendAsync(loginRequest);
        //     var thePlayer = await loginResponse.Content.ReadFromJsonAsync<Player>();
        //     var addCollectionRequest = new HttpRequestMessage(HttpMethod.Post, "/api/collection/add");
        //     addCollectionRequest.Headers.TryAddWithoutValidation("Content-Type", "application/json");
        //     addCollectionRequest.Content = JsonContent.Create(new CollectionViewModel() {
        //         cardId = 123,
        //         playerId = thePlayer.playerId,
        //         quantity = 5
        //     });
        //     var addCollectionResponse = await client.SendAsync(addCollectionRequest);
        //     Assert.True(addCollectionResponse.IsSuccessStatusCode);
        //     var theCollection = await addCollectionResponse.Content.ReadFromJsonAsync<Collection>();
        //     var getCollectionRequest = new HttpRequestMessage(HttpMethod.Get, "/api/collection/collection");
        //     getCollectionRequest.Headers.TryAddWithoutValidation("Content-Type", "application/json");
        //     getCollectionRequest.Content = JsonContent.Create(thePlayer.playerId);
        //     var getCollectionResponse = await client.SendAsync(getCollectionRequest);
        //     Assert.True(getCollectionResponse.IsSuccessStatusCode);
        //     var theCollections = await getCollectionResponse.Content.ReadFromJsonAsync<List<Collection>>();
        //     Assert.True(theCollections.Exists(c => c.collectionId == theCollection.collectionId));
        // }
    }
}