module.exports = class History {
  constructor(history) {
    this.user = '';
    this.name = history.Name;
    this.symbol = history.Symbol;
    this.open = history.Open;
    this.high = history.High;
    this.low = history.Low;
    this.close = history.Close;
  }
};