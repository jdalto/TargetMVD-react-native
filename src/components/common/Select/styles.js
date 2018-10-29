import { StyleSheet } from 'react-native';
import {redDefault, black} from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  selectArea: {
    width: 180,
    height: 37,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: black,
    color: black,
    textAlign: 'center',
    letterSpacing: 2.1,
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '600'
  },
  dropDownArea:{
    width: 180,
    height: 74,
    color: black,
  },
  dropdownText:{
    textAlign: 'center',
    letterSpacing: 2.1,
    fontStyle: 'normal',
    fontSize: 10,
    fontWeight: '600',
    margin: 10
  },
  errorText: {
    color: redDefault,
    fontFamily: 'Open Sans',
    fontSize: 10.5,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
  },
  container:{ 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;