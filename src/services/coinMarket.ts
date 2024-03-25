import { CoinResponse } from 'src/types/coins';
import { api } from './api';
import { AxiosResponse } from 'axios';

const getCoinsList = async () => {
  const response = await api.get<AxiosResponse<CoinResponse>>(
    '/v1/cryptocurrency/listings/latest?convert=USD'
  );
  return response.data;
};

export const CoinMarketApi = {
  getCoinsList,
};
