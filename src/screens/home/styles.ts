import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  errorText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 20,
  },
  container: {
    marginTop: Platform.OS === 'android' ? 20 : 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export { styles };
