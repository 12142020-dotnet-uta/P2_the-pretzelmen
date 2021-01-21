﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ModelLayer
{
    public class Card
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int cardId { get; set; }
        [Required]
        [Display(Name = "Card Name")]
        public string cardName { get; set; }
        [Required]
        [Display(Name = "Card Class")]
        public string cardClass { get; set; }
        [Required]
        [Display(Name = "Attack")]
        public int attackNumber { get; set; }
        [Required]
        [Display(Name = "Defence")]
        public int defenceNumber { get; set; }
        [Required]
        public bool inDeck { get; set; }
        [ForeignKey("Id")]
        public Collection Collection { get; set; }
    }
}
