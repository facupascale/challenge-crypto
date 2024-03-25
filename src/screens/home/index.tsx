import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { debounce } from 'lodash';
import { useCoins, useNavigation } from '@hooks';
import { List, SearchComponent, Toggle } from '@components';
import { ROUTES } from '@constants';
import { CoinListing } from '@types';
import { styles } from './styles';

const Home = () => {
  const [search, setSearch] = useState<string>('');
  const [favoriteEnabled, setFavoriteEnabled] = useState<boolean>(false);
  const { navigate } = useNavigation();
  const { coins, setFavoritesCoins, isFavorite, errorCoins } = useCoins(search, favoriteEnabled);

  const toggleFavorite = () => {
    setFavoriteEnabled(!favoriteEnabled);
  };

  const handleNavigation = (item: CoinListing) => {
    navigate(ROUTES.DETAIL_COIN, {
      item,
    });
  };

  const debouncedSearch = debounce((e: string) => setSearch(e), 500);

  return (
    <SafeAreaView style={styles.screen} edges={['top']} testID="homeScreen">
      <View style={styles.container}>
        <SearchComponent onChangeText={debouncedSearch} />
        <Toggle title="See Favorites" value={favoriteEnabled} onChangeValue={toggleFavorite} />
      </View>
      {errorCoins ? (
        <Text style={styles.errorText}>{'Something went wrong, please try again later'}</Text>
      ) : (
        <>
          {coins !== undefined && (
            <List
              coins={coins}
              setFavoritesCoins={setFavoritesCoins}
              isFavorite={isFavorite}
              navigate={handleNavigation}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export { Home };
