import { FlatList } from 'react-native';
import { CoinListing } from '@types';
import { Card } from '../card';
import { styles } from './styles';

const List = ({
  coins,
  setFavoritesCoins,
  isFavorite,
  navigate,
}: {
  coins: CoinListing[];
  setFavoritesCoins: (item: CoinListing) => void;
  isFavorite: (id: number) => boolean;
  navigate: (item: CoinListing) => void;
}) => {
  return (
    <FlatList
      data={coins}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={({ item, index }: { item: CoinListing; index: number }) => (
        <Card
          item={item}
          index={index}
          setFavoritesCoins={setFavoritesCoins}
          isFavorite={isFavorite}
          navigate={navigate}
        />
      )}
      keyExtractor={(item: CoinListing) => String(item.id)}
    />
  );
};

export { List };
