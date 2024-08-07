import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeCard: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexShrink: 1,
  },
  image: {
    width: 110,
    height: 110,
  },
  placeAddiction: {
    margin: 10,
    flex: 1,
  },
  name: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
  },
  address: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 1,
    marginLeft: 10,
    flexWrap: 'wrap',
    flexShrink: 1,
    flex: 1,
  },
  featuresContainer: {
    flexDirection: 'row',
    marginTop: 10,
    transform: [{scale: 0.8}],
  },
});

export default styles;
