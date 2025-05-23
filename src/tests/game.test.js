const Game = require('../game');

describe('Game', () => {
  let game;
  beforeEach(() => {
        game = new Game('Alice', 'Bob');
    });
  it('should create a new Game instance', () => {
    const game = new Game('Player1', 'Player2');
    expect(game).toBeDefined();
  });
  it('should initialize with player names', () => {
    const game = new Game('Alice', 'Bob');
    expect(game.player1).toBe('Alice');
    expect(game.player2).toBe('Bob');
  });
  it('should initialize scores to 0', () => {
    const game = new Game('Alice', 'Bob');
    expect(game.player1Score).toBe(0);
    expect(game.player2Score).toBe(0);
  });
  it('should start with player 1 as current player', () => {
    const game = new Game('Alice', 'Bob');
    expect(game.currentPlayer).toBe('Alice');
  });
  it('should switch turns correctly', () => {
    const game = new Game('Alice', 'Bob');
    game.switchTurn();
    expect(game.currentPlayer).toBe('Bob');
    game.switchTurn();
    expect(game.currentPlayer).toBe('Alice');
  });
  it('should award points to the current player', () => {
    const game = new Game('Alice', 'Bob');
    game.awardPoint();
    expect(game.player1Score).toBe(1);
    game.switchTurn();
    game.awardPoint();
    expect(game.player2Score).toBe(1);
  });
  it('should determine the winner correctly when all snippets are used and player 1 has a higher score', () => {
    const game = new Game('Alice', 'Bob');
    game.snippets = [1, 2, 3]; // Simulate snippets
    game.currentSnippetIndex = 3; // Simulate all snippets used
    game.player1Score = 2;
    game.player2Score = 1;
    expect(game.getWinner()).toBe('Alice');
});
it('should determine the winner correctly when all snippets are used and player 2 has a higher score', () => {
    const game = new Game('Alice', 'Bob');
    game.snippets = [1, 2, 3]; // Simulate snippets
    game.currentSnippetIndex = 3; // Simulate all snippets used
    game.player1Score = 1;
    game.player2Score = 2;
    expect(game.getWinner()).toBe('Bob');
});
it('should return null (tie) when all snippets are used and scores are equal', () => {
    const game = new Game('Alice', 'Bob');
    game.snippets = [1, 2, 3]; // Simulate snippets
    game.currentSnippetIndex = 3; // Simulate all snippets used
    game.player1Score = 1;
    game.player2Score = 1;
    expect(game.getWinner()).toBe(null);
});
it('should call correct description, and correct line number', () => {
    const game = new Game('Alice', 'Bob');
    const currentSnippet = game.getCurrentSnippet();
    expect(currentSnippet.correctLine).toBeDefined();
    expect(currentSnippet.correctDescription).toBeDefined();
  });
  it('should return null (tie) when all snippets used and scores is equal to zero', () => {
    const game = new Game('Alice', 'Bob');
    game.snippets = [1, 2, 3]; 
    game.currentSnippetIndex = 3; 
    game.player1Score = 0;
    game.player2Score = 0;
    expect(game.getWinner()).toBe(null);
  });
  describe('evaluateGuess', () => {
    it('should return { isCorrect: true } for a correct guess', () => {
      const game = new Game('Alice', 'Bob');
      const snippet = game.getCurrentSnippet();
      const result = game.evaluateGuess(snippet.correctLine, snippet.correctDescription);
      expect(result.isCorrect).toBe(true);
    });
    it('should return { isCorrect: false } for an incorrect guess', () => {
        const game = new Game('Alice', 'Bob');
        const result = game.evaluateGuess(999, 'Incorrect description');
        expect(result.isCorrect).toBe(false);
      });
      it('should switch players after a correct guess', () => {
        const game = new Game('Alice', 'Bob');
        const initialPlayer = game.currentPlayer;
        const snippet = game.getCurrentSnippet();
        game.evaluateGuess(snippet.correctLine, snippet.correctDescription);
        expect(game.currentPlayer).not.toBe(initialPlayer);
      });

      it('should increment the current player\'s score after a correct guess', () => {
        const game = new Game('Alice', 'Bob');
        const initialScore = game.currentPlayer === game.player1 ? game.player1Score : game.player2Score;
        const snippet = game.getCurrentSnippet();
        game.evaluateGuess(snippet.correctLine, snippet.correctDescription);
        const previousPlayer = game.currentPlayer === game.player2 ? game.player1 : game.player2;
        const newScore = previousPlayer === game.player1 ? game.player1Score : game.player2Score;
        expect(newScore).toBe(initialScore + 1);
      });
      it('should not increment the score after incorrect guess', () => {
          const game = new Game('Alice', 'Bob');
          const initialScore = game.currentPlayer === game.player1 ? game.player1Score : game.player2Score;
          game.evaluateGuess(123, 'wrong description');
          const newScore = game.currentPlayer === game.player1 ? game.player1Score : game.player2Score;
          expect(newScore).toBe(initialScore);
      });
      it('should increase snippet index only after correct answer', () => {
        const game = new Game('Alice', 'Bob');
        const initialIndex = game.currentSnippetIndex;
        const snippet = game.getCurrentSnippet();
        game.evaluateGuess(snippet.correctLine, snippet.correctDescription);
        expect(game.currentSnippetIndex).toBe(initialIndex + 1);

        game.currentSnippetIndex = initialIndex; // Reset the snippet index
        game.evaluateGuess(123, 'wrong description');
        expect(game.currentSnippetIndex).toBe(initialIndex);
    });
    it('Switch player after two incorrect attempts', () => {
        const game = new Game('Alice', 'Bob');
        const initialPlayer = game.currentPlayer;
        game.evaluateGuess(123, 'wrong description');
        game.evaluateGuess(123, 'wrong description');
        expect(game.currentPlayer).not.toBe(initialPlayer);
    });
    describe('getCurrentSnippet', () => {
        it('should return snippet properties', () => {
            const game = new Game('Alice', 'Bob')
            const snippet = game.getCurrentSnippet()
            expect(snippet.code).toBeDefined()
            expect(snippet.correctLine).toBeDefined()
            expect(snippet.correctDescription).toBeDefined()
        });
    })
});
});
