import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/simple/price';

type CryptoResponse = Record<string, { usd: number }>;

export const fetchCryptoPrices = async (): Promise<CryptoResponse> => {
  const response = await axios.get<CryptoResponse>(API_URL, {
    params: {
      ids: 'bitcoin,ethereum,ripple,cardano,solana',
      vs_currencies: 'usd',
    },
  });
  return response.data;
};
