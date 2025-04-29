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
});
