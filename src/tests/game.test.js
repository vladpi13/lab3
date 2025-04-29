const Game = require('../game');

describe('Game', () => {
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
});
