import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '45%',
    backgroundColor: 'white',
    height: 120,
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginTop: 20,
  },
  subContainer: {
    alignSelf: 'center',
    width: '90%',
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
  },
  subText: {
    fontWeight: '600',
    fontSize: 14,
  },
});

export { styles };
