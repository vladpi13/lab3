const codes = require('./codes');

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
    this.player2 = player2;
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentPlayer = player1;
    this.snippets = codes;
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
            return null; 
          }
        }
        return null; 
      }

      getCurrentSnippet() {
        return this.snippets[this.currentSnippetIndex];
      }

      evaluateGuess(lineNumber, description) {
        const snippet = this.getCurrentSnippet();
        const isCorrect = snippet.correctLine === lineNumber && snippet.correctDescription === description;
        if (isCorrect) {
          this.switchTurn();
        }
        return { isCorrect: isCorrect };
      }
}
  module.exports = Game;
