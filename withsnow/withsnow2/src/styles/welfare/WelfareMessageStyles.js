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
    zIndex: 2,
  },
  handle: {
    position: 'absolute',
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 15,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    zIndex: 2,
  },
  extraImage: {
    position: 'absolute',
    width: 40,
    height: 40,
    bottom: 75,
    right: 105,
  },
  welfareItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldName: {
    color: 'black',
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 30,
  },
  welfareText: {
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
    lineHeight: 30,
  },
  callText: {
    textAlign: 'center',
    color: '#535353',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 20.4,
    marginTop: 5,
    marginBottom: 10,
  },
  messageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  messageText: {
    textAlign: 'center',
    width: '100%',
    fontSize: 17,
    fontWeight: '500',
    backgroundColor: '#F9A596',
    color: '#FFFFFF',
    borderRadius: 18.5,
    paddingVertical: 10,
    lineHeight: 20.4,
  },
  writeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#F9A596',
    borderRadius: 18.5,
  },
  writeText: {
    color: '#696969',
    textAlign: 'center',
    width: '100%',
    fontSize: 17,
    fontWeight: '500',
    borderRadius: 18.5,
    paddingVertical: 10,
    lineHeight: 20.4,
  },
  writeIcon: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#F9A596',
    borderRadius: 99,
    color: '#F9A596',
    padding: 10,
    right: 7,
  },
});
