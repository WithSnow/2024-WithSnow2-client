import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
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
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 15,
    marginRight: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  floorContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
    flexDirection: 'column',
  },
  floorBox: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 9999,
    marginVertical: 2,
    borderWidth: 1,
    borderColor: '#19BAFF',
  },
  floorText: {
    fontSize: 10,
    fontWeight: '400',
    color: '#19BAFF',
  },
  placeAddiction: {
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
    marginTop: 10,
  },
  category: {
    color: '#ADB0B0',
  },
  featuresContainer: {
    flexDirection: 'row',
    transform: [{scale: 0.8}],
    marginLeft: -25,
    marginBottom: -10,
  },
  featureplus: {
    marginRight: 5,
  },
});

export default styles;
