import { StyleSheet } from 'react-native';
import { black } from '../../../constants/styleConstants' 

const styles = StyleSheet.create({
  signUpButton: {
    marginTop: 4,
    height: 'auto',
    width: 100,
    color: black,
  },
  container:{
    // flex:1,
    // flexDirection:'row',
    // alignItems:'center',
    // justifyContent:'center'
  },
  label:{
    width: 102.3,
    height: 15,
    fontFamily: 'Open Sans',
    fontSize: 11,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 1.65,
    textAlign: 'center',
    color: black,
    marginTop: 20
  },
  field: {
    flex:1,
    alignItems: 'center',
  },
  buttonText: {
    width: 102.3,
    height: 15,
    fontFamily: 'Open Sans',
    fontSize: 11,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 1.65,
    textAlign: 'center',
    color: black
  },
  buttonsContainer:{
    flex:1,
    alignItems:'center',
    marginTop: 30
  }
});

export default styles;