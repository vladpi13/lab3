class Game {
    constructor(player1, player2) {
        this.player1 = player1;
    this.player2 = player2;
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentPlayer = player1;
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
}
  module.exports = Game;
