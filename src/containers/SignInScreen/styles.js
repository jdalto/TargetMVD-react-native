import { StyleSheet } from 'react-native';
import {white, black} from '../../constants/styleConstants';
import { getTopSpacing } from '../../utils/helpers';

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 1,
  },
  signInContainer: {
    backgroundColor: white,
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: getTopSpacing()
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  targetMvdText: {
    width: 221.5,
    height: 27,
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 3,
    color: black,
    marginBottom: 20,
    marginLeft: 40
  }
});

export default styles;
