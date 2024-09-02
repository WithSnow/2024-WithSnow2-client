import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    width: '80%',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 30,
    justifyContent: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 15,
    color: '#C9C9C9',
  },
  rampImg: {
    width: 260,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  warning: {
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#C9C9C9',
    marginVertical: 10,
  },
  viewPositionText: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
    color: '#F9A596',
    marginBottom: -5,
  },
});
