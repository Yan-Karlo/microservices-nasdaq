const StockService = require('../services/stock.services');
const {findError} = require('../../utils/errorList')

module.exports = class StockController{
    constructor(){
        this.service = new StockService();
    }

  ping = (req, res) => res.status(200).json(this.service.ping());

  getStock = async (req, res) => {
    const {stockCode} = req.params;

    if (stockCode.length == 0) {
      return res.status(404).json(findError('stockCodeMissing'))
    }

    const response = await this.service.getStock(stockCode);
    return res.status(response.status ?? 200).json(response.data);
  }

  getHistory = async (req, res) => {
    const response = await this.service.getHistory();
  }

  getStatistics = async (req, res) => {
    const response = await this.service.getStatistics();
  }

}