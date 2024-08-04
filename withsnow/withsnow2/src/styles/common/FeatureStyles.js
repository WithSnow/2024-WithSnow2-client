import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  featureContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    flexWrap: 'wrap',
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 13,
    color: '#F9A596',
    fontFamily: 'Pretendard',
    fontWeight: '500',
    letterSpacing: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#F9A596',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  featureText: {
    marginLeft: 5,
    color: '#F9A596',
    fontWeight: '500',
    fontFamily: 'Pretendard',
    letterSpacing: 1,
  },
});
