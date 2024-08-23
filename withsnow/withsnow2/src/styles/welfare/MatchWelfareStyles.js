import {RootTagContext, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  divider: {
    width: 120,
    borderBottomColor: '#E7E9EE',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  welfareInfo: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 18,
  },

  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#F0F1F4',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E7E9EE',
  },
  tagText: {
    color: '#7A849C',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.4,
  },

  textContainer: {
    marginTop: 30,
    textAlign: 'center',
    alignItems: 'center',
  },
  matchTextContainer: {
    flexDirection: 'row',
    marginTop: -28,
  },
  matchText: {
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
    lineHeight: 30,
  },
  welfareName: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
  },

  cancleButton: {
    marginTop: 40,
    borderColor: '#ADB0B0',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 80,
    borderRadius: 18.5,
    gap: 10,
  },
  cancleText: {
    color: '#ADB0B0',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 20.4,
  },
});
