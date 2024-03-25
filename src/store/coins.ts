import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { CoinListing } from '@types';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CoinStoreProps {
  favoritesCoins: CoinListing[];
  setFavoritesCoins: (data: CoinListing) => void;
}

const useCoinStore = create<CoinStoreProps>()(
  persist(
    (set) => ({
      favoritesCoins: [],
      setFavoritesCoins: (data) =>
        set((store) => {
          const favoriteItem = data;
          const findFavorite = store.favoritesCoins.findIndex(
            (item) => item.id === favoriteItem.id
          );
          if (findFavorite !== -1) {
            const newFavoritesCoins = store.favoritesCoins.filter(
              (item) => item.id !== favoriteItem.id
            );
            return { favoritesCoins: newFavoritesCoins };
          } else {
            return { favoritesCoins: [...store.favoritesCoins, favoriteItem] };
          }
        }),
    }),
    {
      name: 'CoinStore',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export { useCoinStore };
