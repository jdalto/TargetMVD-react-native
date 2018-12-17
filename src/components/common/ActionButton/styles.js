import { StyleSheet } from 'react-native';
import { primaryFont, primaryFontWeight } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  title: {
    fontFamily: primaryFont,
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: primaryFontWeight,
    letterSpacing: 1.65,
    textAlign: 'center'
  },
  container: {
    width: 157
  }
});

export default styles;
  