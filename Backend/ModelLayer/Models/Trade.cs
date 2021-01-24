using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ModelLayer
{
    public class Trade
    {
        [Key]
        public int tradeId { get; set; }
        [Required]
        public Player postPlayer { get; set; }
        public Player acceptPlayer { get; set; }
        [Required]
        public int postPlayerCardOffer { get; set; }
        public int acceptPlayerCardOffer { get; set; }
        public bool active { get; set; }
    }
}
