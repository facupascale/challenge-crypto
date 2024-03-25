import { useQuery } from 'react-query';
import { CoinMarketApi } from '@services';
import { CoinListing } from '@types';
import { useCoinStore } from '@store';

const useCoins = (search: string, favoritesEnabled: boolean) => {
  const { favoritesCoins, setFavoritesCoins } = useCoinStore();
  const { data, isLoading, refetch, isFetching, isError } = useQuery(
    'coins',
    CoinMarketApi.getCoinsList,
    {
      refetchInterval: 30000,
    }
  );

  const coins = favoritesEnabled ? favoritesCoins : (data?.data as unknown as CoinListing[]);

  // Filter coins by search
  const coinsFilterBySearch = coins?.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // se if the coin is favorite
  const isFavorite = (id: number): boolean => {
    if (favoritesCoins !== undefined) {
      return favoritesCoins.some((coin) => coin.id === id);
    }
    return false;
  };

  return {
    coins: coinsFilterBySearch,
    isLoadingCoins: isLoading,
    errorCoins: isError,
    setFavoritesCoins,
    isFavorite,
    refetchCoins: refetch,
    isFetchingCoins: isFetching,
  };
};

export { useCoins };
