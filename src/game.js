class Game {
    constructor(player1, player2) {
        this.player1 = player1;
    this.player2 = player2;
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentPlayer = player1;
    this.snippets = [1, 2, 3];
    this.currentSnippetIndex = 0;
    }

    switchTurn() {
        this.currentPlayer = (this.currentPlayer === this.player1) ? this.player2 : this.player1;
      }

      awardPoint() {
        if (this.currentPlayer === this.player1) {
          this.player1Score++;
        } else {
          this.player2Score++;
        }
    }

    getWinner() {
        if (this.currentSnippetIndex >= this.snippets.length) {
          if (this.player1Score > this.player2Score) {
            return this.player1;
          } else if (this.player2Score > this.player1Score) {
            return this.player2;
          } else {
            return null; // It's a tie
          }
        }
        return null; // Game is not over yet
      }
}
  module.exports = Game;
