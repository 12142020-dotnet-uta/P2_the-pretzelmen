using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RepositoryLayer.Migrations
{
    public partial class testBooster : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "cards",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cardId = table.Column<int>(type: "int", nullable: false),
                    cardName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cardClass = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    attackNumber = table.Column<int>(type: "int", nullable: false),
                    defenceNumber = table.Column<int>(type: "int", nullable: false),
                    imageURL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    inDeck = table.Column<bool>(type: "bit", nullable: false),
                    qty = table.Column<int>(type: "int", nullable: false),
                    CollectionID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cards", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "collections",
                columns: table => new
                {
                    collectionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    collectionHolder = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    quantity = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_collections", x => x.collectionId);
                });

            migrationBuilder.CreateTable(
                name: "TodoItems",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsComplete = table.Column<bool>(type: "bit", nullable: false),
                    Secret = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TodoItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "players",
                columns: table => new
                {
                    playerId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    userName = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    password = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    wins = table.Column<int>(type: "int", nullable: false),
                    losses = table.Column<int>(type: "int", nullable: false),
                    collectionId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Tokens = table.Column<int>(type: "int", nullable: false),
                    login = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_players", x => x.playerId);
                    table.ForeignKey(
                        name: "FK_players_collections_collectionId",
                        column: x => x.collectionId,
                        principalTable: "collections",
                        principalColumn: "collectionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "matches",
                columns: table => new
                {
                    matchId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    player1playerId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    player2playerId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    player1PairPicked = table.Column<int>(type: "int", nullable: false),
                    player2PairPicked = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_matches", x => x.matchId);
                    table.ForeignKey(
                        name: "FK_matches_players_player1playerId",
                        column: x => x.player1playerId,
                        principalTable: "players",
                        principalColumn: "playerId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_matches_players_player2playerId",
                        column: x => x.player2playerId,
                        principalTable: "players",
                        principalColumn: "playerId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "pairs",
                columns: table => new
                {
                    pairId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    matchId = table.Column<int>(type: "int", nullable: false),
                    playerId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    cardId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_pairs", x => x.pairId);
                    table.ForeignKey(
                        name: "FK_pairs_players_playerId",
                        column: x => x.playerId,
                        principalTable: "players",
                        principalColumn: "playerId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "trades",
                columns: table => new
                {
                    tradeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    postPlayerplayerId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    acceptPlayerplayerId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    postPlayerCardOffer = table.Column<int>(type: "int", nullable: false),
                    acceptPlayerCardOffer = table.Column<int>(type: "int", nullable: false),
                    active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_trades", x => x.tradeId);
                    table.ForeignKey(
                        name: "FK_trades_players_acceptPlayerplayerId",
                        column: x => x.acceptPlayerplayerId,
                        principalTable: "players",
                        principalColumn: "playerId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_trades_players_postPlayerplayerId",
                        column: x => x.postPlayerplayerId,
                        principalTable: "players",
                        principalColumn: "playerId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_matches_player1playerId",
                table: "matches",
                column: "player1playerId");

            migrationBuilder.CreateIndex(
                name: "IX_matches_player2playerId",
                table: "matches",
                column: "player2playerId");

            migrationBuilder.CreateIndex(
                name: "IX_pairs_playerId",
                table: "pairs",
                column: "playerId");

            migrationBuilder.CreateIndex(
                name: "IX_players_collectionId",
                table: "players",
                column: "collectionId");

            migrationBuilder.CreateIndex(
                name: "IX_trades_acceptPlayerplayerId",
                table: "trades",
                column: "acceptPlayerplayerId");

            migrationBuilder.CreateIndex(
                name: "IX_trades_postPlayerplayerId",
                table: "trades",
                column: "postPlayerplayerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "cards");

            migrationBuilder.DropTable(
                name: "matches");

            migrationBuilder.DropTable(
                name: "pairs");

            migrationBuilder.DropTable(
                name: "TodoItems");

            migrationBuilder.DropTable(
                name: "trades");

            migrationBuilder.DropTable(
                name: "players");

            migrationBuilder.DropTable(
                name: "collections");
        }
    }
}
