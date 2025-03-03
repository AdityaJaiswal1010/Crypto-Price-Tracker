# API Integration

The Crypto Tracker fetches real-time cryptocurrency prices using the **CoinGecko API**.

## API Endpoint
```sh
GET https://api.coingecko.com/api/v3/simple/price
```

## API Call Implementation
```ts
import axios from 'axios';

export const fetchCryptoPrices = async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
    params: { ids: 'bitcoin,ethereum,ripple,cardano,solana', vs_currencies: 'usd' },
  });
  return response.data;
};