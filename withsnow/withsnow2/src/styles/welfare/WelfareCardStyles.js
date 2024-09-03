import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E7E9EE',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 24,
    display: 'inline-flex',
    padding: 14,
    marginHorizontal: 15,
  },
  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    height: 60,
    width: 60,
    backgroundColor: '#E2E4E9',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    color: 'white',
    fontSize: 30,
  },
  name: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 15,
    lineHeight: 16.8,
  },
  checkBox: {
    backgroundColor: '#E7E9EE',
    borderRadius: 12,
    padding: 12,
  },
  activeCheckBox: {
    backgroundColor: '#19BAFF',
  },
  checkBoxIcon: {
    color: '#FFFFFF',
    fontSize: 20,
  },

  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  tagText: {
    color: '#7A849C',
    fontSize: 12,
    fontWeight: '500',
    backgroundColor: '#F0F1F4',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E7E9EE',
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginRight: 10,
    lineHeight: 14.4,
  },

  divider: {
    width: '100%',
    borderBottomWidth: 1.5,
    borderBottomColor: '#E2E4E9',
    marginBottom: -12,
  },

  underContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  place: {
    fontSize: 12,
    fontWeight: '600',
    color: '#7A849C',
    borderRightColor: 'rgba(122, 132, 156, 0.5)',
    borderRightWidth: 1.5,
    paddingRight: 10,
    lineHeight: 14.4,
  },
  distance: {
    color: '#19BAFF',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 10,
    lineHeight: 14.4,
  },
});
