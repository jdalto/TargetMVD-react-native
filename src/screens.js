import { Navigation } from 'react-native-navigation';
import SignUpScreen from './containers/SignUpScreen';

const registerScreens = (store, Provider) => {
  //Navigation.registerComponent('targetmvd.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('targetmvd.SignUpScreen', () => SignUpScreen, store, Provider);
};

export default registerScreens;