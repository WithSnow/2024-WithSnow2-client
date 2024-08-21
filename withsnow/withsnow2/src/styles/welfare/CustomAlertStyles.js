import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  alertContainer: {
    width: '90%',
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  alertMessage: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
    letterSpacing: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    left: '40%',
  },
  alertButton: {
    width: 100,
    paddingVertical: 4,
    borderRadius: 18.5,
    borderColor: '#F9A596',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    gap: 10,
  },
  buttonText: {
    color: '#F9A596',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 20.4,
  },
});
