using System;
using Xunit;

using BackenAPI;
using IntegrationTest.Utility;

namespace IntegrationTest
{
    public class BasicTests : IClassFixture<GameFactory<Startup>>
    {
        private GameFactory<Startup> Factory;
        public BasicTests(GameFactory<Startup> factory) {
            Factory = factory;
        }
        [Fact]
        public void TestClientPlayer()
        {
            var client = Factory.CreateClient();
            Assert.NotNull(client);
        }
    }
}
