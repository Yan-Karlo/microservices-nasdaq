const axios = require('axios');
const StockRepository = require('../repositories/stock.repository');
const HistoryModel = require('../models/history.model');
const { findError } = require('../../utils/errorList');
const History = require('../domains/history.domain');

module.exports = class StockService{
  constructor() {
    this.repository = new StockRepository();
  }

  ping = () => 'pong';

  getStock = async (stockCode, userId) => {
    try {
      const response = await axios.get(`http://localhost:3002/v1/stocks/get-stock/${stockCode}`)
      const history = new History(response.data.pop())
      history.userId = userId;
      const newHistory = new HistoryModel(history)
      try {
        newHistory.save();
      } catch (error) {
        findError('savingNewHistory')
      }

      delete history.user
      return history;

    } catch(error){
      return findError('callingStockService', error.message);
    }
  }
  getStats =  () => {
    try {
      return  this.repository.getStats();
    } catch (error) {
      return findError('unexpectedError', error.message);
    }
  }

}