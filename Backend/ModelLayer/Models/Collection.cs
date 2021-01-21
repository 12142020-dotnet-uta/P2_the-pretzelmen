using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ModelLayer
{
    public class Collection
    {
        [Key]
        public Guid collectionId { get; set; } = new Guid();
        [ForeignKey("Card")]
        public ICollection<Card> cards { get; set; }
        [ForeignKey("Player")]
        public Player collectionHolder { get; set; }
        [Range(1,int.MaxValue)]
        public int quantity { get; set; }

    }
}
