import { StyleSheet } from 'react-native';
import { black } from '../../../constants/styleConstants' 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '8%'
  },
  label: {
    height: 15,
    fontFamily: 'Open Sans',
    fontSize: 11,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 1.65,
    textAlign: 'center',
    color: black
  },
  field: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto'
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: '5%'
  }
});

export default styles;
