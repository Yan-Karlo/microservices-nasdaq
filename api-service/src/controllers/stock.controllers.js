const StockService = require('../services/stock.services');
const User = require('../domains/user.domain');
module.exports = class StockController{
    constructor(){
        this.service = new StockService();
    }

  ping = (req, res) => res.status(200).json(this.service.ping());

  getStock = async (req, res) => {
    const { stockCode } = req.params;
    const { userId } = req;
    const response = await this.service.getStock(stockCode, userId);
    return res.status(response.status || 200).json(response);
  }

  getStats = async (req, res) => {
    const response = await this.service.getStats();
    return res.status(response.status || 200).json(response);
  }

}