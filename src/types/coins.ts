export type CoinResponse = {
  data: CoinListing[];
  status: StatusResponse;
};

export type CoinListing = {
  ciculating_supply: number;
  cmc_rank: number;
  date_added: string;
  id: number;
  infinite_supply: boolean;
  last_updated: string;
  max_supply: number;
  name: string;
  num_market_pairs: number;
  platform: string | null;
  quote: Quote;
  self_reported_circulating_supply: number | null;
  self_reported_market_cap: number | null;
  slug: string;
  symbol: string;
  tags: string[];
  total_supply: number;
  tvl_ratio: number | null;
};

type Quote = {
  [key: string]: {
    fully_diluted_market_cap: number;
    last_updated: string;
    market_cap: number;
    market_cap_dominance: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_30d: number;
    percent_change_60d: number;
    percent_change_7d: number;
    percent_change_90d: number;
    price: number;
    tvl: number | null;
    volume_change_24: number;
    volume_24h: number;
  };
};

export type StatusResponse = {
  credit_count: number;
  elapsed: number;
  error_code: number | null;
  error_message: string | null;
  notice: string | null;
  timestamp: string;
  total_count: number;
};
