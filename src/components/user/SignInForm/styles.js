import { StyleSheet } from 'react-native';
import { black } from '../../../constants/styleConstants' 

const styles = StyleSheet.create({
  signInButton: {
    marginTop: 4,
    height: 'auto',
    width: 100,
    color: black,
  },
  container: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    height: 'auto'
  },
  label: {
    height: 15,
    fontFamily: 'Open Sans',
    fontSize: 11,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 1.65,
    textAlign: 'center',
    color: black,
    marginTop: '19%'
  },
  field: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    height: '25%'
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
  buttonsContainer: {
    flex:1,
    alignItems:'center',
    marginTop: '10%'
  },
  dividerContainer: {
    backgroundColor: black,
    margin: 10
  },
  forgotPasswordText: {
    width: 135.5,
    height: 14,
    fontFamily: 'Open Sans',
    fontSize: 10.5,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: black,
    marginTop: '5%'
  },
  connectWithFacebookText: { 
    width: 210,
    height: 17,
    fontFamily: 'Open Sans',
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 2.4,
    textAlign: 'center',
    color: black,
    marginTop: '5%'
  }
});

export default styles;
