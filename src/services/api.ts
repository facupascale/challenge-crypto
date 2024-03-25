import { EnvConfig } from '@config';
import axios from 'axios';

const api = axios.create({
  baseURL: EnvConfig.API_URL,
  headers: {
    'X-CMC_PRO_API_KEY': EnvConfig.API_KEY,
  },
});

export { api };
