import { Navigation } from 'react-native-navigation';
import SignUpScreen from './containers/SignUpScreen';
import SignInScreen from './containers/SignInScreen';
import HomeScreen from './containers/HomeScreen';
import TargetScreen from './containers/TargetScreen';
import ProfileScreen from './containers/ProfileScreen';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('targetmvd.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('targetmvd.SignUpScreen', () => SignUpScreen, store, Provider);
  Navigation.registerComponent('targetmvd.SignInScreen', () => SignInScreen, store, Provider);
  Navigation.registerComponent('targetmvd.TargetScreen', () => TargetScreen, store, Provider);
  Navigation.registerComponent('targetmvd.ProfileScreen', () => ProfileScreen, store, Provider);
};

export default registerScreens;
