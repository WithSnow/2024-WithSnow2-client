import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 110,
    height: 110,
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
    marginTop: -5,
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
    position: 'absolute',
    flexDirection: 'row',
    transform: [{scale: 0.9}],
    bottom: 10,
    right: 10,
    height: 40,
  },
  favoriteButton: {
    position: 'absolute',
    right: 10,
  },
});

export default styles;
