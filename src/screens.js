import { Navigation } from 'react-native-navigation';
import SignUpScreen from './containers/SignUpScreen';
import SignInScreen from './containers/SignInScreen';
import ChatScreen from './containers/ChatScreen';
import TargetScreen from './containers/TargetScreen';
import ProfileScreen from './containers/ProfileScreen';
import ProfileNavBarButton from './components/ProfileNavBarButton';
import ChatNavBarButton from './components/ChatNavBarButton';
import React from 'react';
import { Provider} from 'react-redux';

function reduxStoreWrapper (MyComponent, store) {
    return () => {
        return class StoreWrapper extends React.Component {
            render () {
                return (
                    <Provider store={store}>
                        <MyComponent />
                    </Provider>
                );
            }
        };
    };
}

const registerScreens = (store) => {
  Navigation.registerComponentWithRedux('targetmvd.ChatScreen', reduxStoreWrapper(ChatScreen, store));
  Navigation.registerComponentWithRedux('targetmvd.SignUpScreen', reduxStoreWrapper(SignUpScreen, store));
  Navigation.registerComponentWithRedux('targetmvd.SignInScreen', reduxStoreWrapper(SignInScreen, store));
  Navigation.registerComponentWithRedux('targetmvd.TargetScreen', reduxStoreWrapper(TargetScreen, store));
  Navigation.registerComponent('targetmvd.ProfileScreen', reduxStoreWrapper(ProfileScreen, store));
  Navigation.registerComponent('targetmvd.ProfileNavBarButton', reduxStoreWrapper(ProfileNavBarButton, store));
  Navigation.registerComponent('targetmvd.ChatNavBarButton', reduxStoreWrapper(ChatNavBarButton, store));
};

export default registerScreens;
