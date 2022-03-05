const HistoryModel = require('../models/history.model');

module.exports = class StockRepository {
  constructor() { }
  getStats = () => {
    const grouping = [
      {
        '$group': {
          '_id': '$name',
          'times_requested': {
            '$sum': 1
          }
        }
      }
    ];

    return HistoryModel.aggregate(grouping).sort({'times_requested': -1, 'name': 1}).limit(5).exec();
  }
}