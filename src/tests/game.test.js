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
});
