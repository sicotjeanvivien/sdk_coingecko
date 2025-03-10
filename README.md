# 🦎 CoinGecko SDK for Node.js

A simple and efficient SDK to interact with the [CoinGecko API](https://www.coingecko.com/en/api) using Node.js and TypeScript.
The sdk is only available for version v3.0.1 (PUBLIC API)

## 🚀 Features
- 📈 Get real-time cryptocurrency data
- 🏷️ Fetch market prices, trends, and exchange rates
- ⚡ Lightweight and easy to use
- ✅ Fully typed for TypeScript support

## 📦 Installation
Install the package using npm or yarn:

```
npm install @awsd/sdk_coingecko
```
##### or
```
yarn add @awsd/sdk_coingecko
```

### Add variables in .env 
```
COINGECKO_API_KEY="<your key>"
COINGECKO_API_BASE_URL="https://api.coingecko.com/api/v3"
```
### Exemple basic use in node server

```import * as http from 'http';
import SDK from '@awsd/sdk_coingecko';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  const data = await SDK.getCoinMarketList({ vs_currency: "usd", ids: "bitcoin,ethereum" });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```