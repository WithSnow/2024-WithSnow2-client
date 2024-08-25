import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    overflow: 'visible',
  },
  imageContainer: {
    width: 90,
    height: 90,

    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    color: '#37363C',
    fontSize: 14,
    fontWeight: '500',
  },
  address: {
    fontSize: 12,
    color: '#696969',
    fontWeight: '400',
    letterSpacing: 1,
    marginTop: 5,
  },
  actionContainer: {
    flexDirection: 'row',
    marginTop: -10,
    transform: [{scale: 0.8}],
    marginRight: -3,
  },
  favoriteButton: {
    left: '85%',
    bottom: '37%',
  },
});

export default styles;
