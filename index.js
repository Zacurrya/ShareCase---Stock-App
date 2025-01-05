const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['cttgs5pr01qqhvb0j6h0cttgs5pr01qqhvb0j6hg'];
api_key.apiKey = "<cttgs5pr01qqhvb0j6h0cttgs5pr01qqhvb0j6hg>"
const finnhubClient = new finnhub.DefaultApi()

finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
    console.log(data)
});