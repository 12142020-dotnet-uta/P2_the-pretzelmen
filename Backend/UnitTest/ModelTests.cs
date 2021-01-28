using Xunit;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

using ModelLayer;
using ModelLayer.ModelViews;

// 'int' is not nullable by default so some instances of Required cannot be tested.

namespace UnitTest
{
    public class ModelTests
    {
        [Fact]
        public void TestValidateCardRequired()
        {
            Card card = new Card();
            ValidationContext context = new ValidationContext(card);
            List<ValidationResult> results = new List<ValidationResult>();

            bool valid = Validator.TryValidateObject(card, context, results, true);
            Assert.False(valid);
            
            Assert.Equal(3, results.Count);
        }
        [Fact]
        public void TestValidateCollectionRange()
        {
            Collection collection = new Collection();
            ValidationContext context = new ValidationContext(collection);
            List<ValidationResult> results = new List<ValidationResult>();

            bool valid = Validator.TryValidateObject(collection, context, results, true);
            Assert.False(valid);
            Assert.Equal(1, results.Count);
        }
        [Fact]
        public void TestValidateTradeRequired() {
            Trade trade = new Trade();
            ValidationContext context = new ValidationContext(trade);
            List<ValidationResult> results = new List<ValidationResult>();

            bool valid = Validator.TryValidateObject(trade, context, results, true);
            Assert.False(valid);
            Assert.Equal(1, results.Count);
        }
        [Fact]
        public void TestValidatePlayerRequired()
        {
            Player player = new Player();
            ValidationContext context = new ValidationContext(player);
            List<ValidationResult> results = new List<ValidationResult>();

            bool valid = Validator.TryValidateObject(player, context, results, true);
            Assert.False(valid);
            Assert.Equal(2, results.Count);
        }
        [Fact]
        public void TestValidatePlayerStringLengthAndRange()
        {
            Player player = new Player() {
                userName = "Supercalifragilisticexpialidocious",
                password = "Supercalifragilisticexpialidocious",
                wins = -1,
                losses = -1
            };
            ValidationContext context = new ValidationContext(player);
            List<ValidationResult> results = new List<ValidationResult>();

            bool valid = Validator.TryValidateObject(player, context, results, true);
            Assert.False(valid);
            Assert.Equal(4, results.Count);
            Assert.Equal("The user name must be within 3 to 25 characters", results[0].ErrorMessage);
            Assert.Equal("The user name must be within 3 to 25 characters", results[1].ErrorMessage);
        }
        [Fact]
        public void TestValidatePlayerViewModelRequired()
        {
            PlayerViewModel pvm = new PlayerViewModel();
            ValidationContext context = new ValidationContext(pvm);
            List<ValidationResult> results = new List<ValidationResult>();

            bool valid = Validator.TryValidateObject(pvm, context, results, true);
            Assert.False(valid);
            Assert.Equal(2, results.Count);
        }
        [Fact]
        public void TestValidatePlayerViewModelStringLength()
        {
            PlayerViewModel pvm = new PlayerViewModel() {
                userName = "Supercalifragilisticexpialidocious",
                password = "Supercalifragilisticexpialidocious",
            };
            ValidationContext context = new ValidationContext(pvm);
            List<ValidationResult> results = new List<ValidationResult>();

            bool valid = Validator.TryValidateObject(pvm, context, results, true);
            Assert.False(valid);
            Assert.Equal(2, results.Count);
            Assert.Equal("The user name must be within 3 to 25 characters", results[0].ErrorMessage);
            Assert.Equal("The user name must be within 3 to 25 characters", results[1].ErrorMessage);
        }

    }
}
