using System;
namespace ModelLayer.ModelViews
{
    public class TradeViewModel
    {
        public Guid player1Id { get; set; }

        public Guid player2Id { get; set; }

        public int player1CardOffer { get; set; }

        public int player2CardOffer { get; set; }

    }
}
