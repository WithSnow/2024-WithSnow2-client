import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    paddingBottom: 30,
    marginBottom: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    elevation: 5,
    overflow: 'hidden',
  },
  actionContainer: {
    flexDirection: 'row',
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 5,
  },
});
