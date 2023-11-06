import axios from "axios";
const apiServer = axios.create({
  baseURL: "http://14.225.198.206:8080/",
});

const binanceApi = axios.create({
  baseURL: "https://api.binance.com/api/v3",
});
const cexApi = axios.create({
  baseURL: "https://api.plus.cex.io/rest-public",
});
export { apiServer, binanceApi, cexApi };
