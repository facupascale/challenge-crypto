import { View, Text, Button, ActivityIndicator, Platform } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RoutesParamList } from '@types';
import { ROUTES } from '@constants';
import { useCoins } from '@hooks';
import { styles } from './styles';

const DetailCoin = () => {
  const route = useRoute<RouteProp<RoutesParamList, ROUTES.DETAIL_COIN>>();
  const { item } = route.params;
  const { refetchCoins, isLoadingCoins, isFetchingCoins } = useCoins('', false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Price: {item.quote.USD.price} USD</Text>
      <Text style={styles.text}>Change Percent 24h: {item.quote.USD.percent_change_24h}%</Text>
      <Text style={{ ...styles.text, marginBottom: Platform.OS === 'android' ? 10 : 0 }}>
        Volume: {item.quote.USD.volume_24h}
      </Text>
      {isLoadingCoins || isFetchingCoins ? (
        <ActivityIndicator size="small" color="black" style={styles.loading} />
      ) : (
        <Button title="Update" onPress={() => refetchCoins()} />
      )}
    </View>
  );
};

export { DetailCoin };
