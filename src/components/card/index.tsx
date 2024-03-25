import { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icons } from '@constants';
import { CoinListing } from '@types';
import { styles } from './styles';

const Card = ({
  item,
  index,
  setFavoritesCoins,
  isFavorite,
  navigate,
}: {
  item: CoinListing;
  index: number;
  setFavoritesCoins: (item: CoinListing) => void;
  isFavorite: (id: number) => boolean;
  navigate: (item: CoinListing) => void;
}) => {
  const favorite = useMemo(() => isFavorite(item.id), [isFavorite, item.id]);

  return (
    <TouchableOpacity
      onPress={() => navigate(item)}
      style={{ ...styles.container, marginTop: index === 0 || index === 1 ? 10 : 0 }}
    >
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 10,
        }}
        hitSlop={{ top: 10, bottom: 20, left: 20, right: 10 }}
        onPress={() => setFavoritesCoins(item)}
      >
        {favorite ? (
          <Icons.StartFilledIcon color="#FFD700" width={15} height={15} />
        ) : (
          <Icons.StartOutlineIcon color="black" width={15} height={15} />
        )}
      </TouchableOpacity>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.subContainer}>
        <Text style={styles.subText}>Symbol: {item.symbol}</Text>
        <Text style={styles.text}>{item.quote.USD.price} USD</Text>
      </View>
    </TouchableOpacity>
  );
};

export { Card };
