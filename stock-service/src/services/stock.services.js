const axios = require('axios');
const csvToJson = require('csvtojson');
const { findError } = require('../../utils/errorList');

module.exports = class StockService{
  constructor(){}

  ping = () => 'pong';

  getStock = async (stockCode) => {
    try {
      const response = await axios.get(`https://stooq.com/q/l/?s=${stockCode}&f=sd2t2ohlcvn&h&e=csv`)

      const data = await csvToJson({
        noheader:false,
        output: "json"
      })
        .fromString(response.data)

      return { status: 200, data };

    } catch(error){
      return findError('stockQuotesRequest', error.message)
    }
  }
  getHistory = () =>{}
  getStatistics = () =>{}

}