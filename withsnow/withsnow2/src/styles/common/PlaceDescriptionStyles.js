import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0057FF',
    letterSpacing: 1,
  },
  address: {
    fontSize: 12,
    fontWeight: '400',
    color: '#696969',
    marginVertical: 5,
    letterSpacing: 1,
  },
  rating: {
    fontSize: 16,
    color: '#ffcc00',
  },
  phone: {
    fontSize: 12,
    fontWeight: '400',
    color: '#696969',
    letterSpacing: 1,
  },
  openTime: {
    fontSize: 12,
    fontWeight: '400',
    color: '#696969',
    letterSpacing: 1,
  },
  favoriteButton: {
    position: 'absolute',
    right: 10,
  },
});
