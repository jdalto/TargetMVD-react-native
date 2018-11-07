import configureStore from '../store/configureStore';
import { Provider} from 'react-redux';
import registerScreens from '../screens';
import { Navigation } from 'react-native-navigation';
import { sessionService } from 'redux-react-native-session';

const store = configureStore();
registerScreens(store, Provider);

class App {
  constructor() {
    this.appInitialized = false;
    this.authenticated = false;
    sessionService.initSessionService(store);
    store.subscribe(this.onStoreUpdate.bind(this));
  }

  onStoreUpdate() {
    const session = store.getState().get('session');
    const authenticated = session.get('authenticated');
    const user = session.get('user');
    const shouldUpdate = this.authenticated !== authenticated && (!authenticated || !user.isEmpty());
    if (!this.appInitialized) {
      const checked = session.get('userChecked'); 
      if (checked) {
        this.appInitialized = true;
        this.authenticated = authenticated;
        this.startApp(authenticated);
      }
    } else if (shouldUpdate) {
      this.authenticated = authenticated;
      this.startApp(authenticated);
    }
  }

  startAuthenticatedApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'targetmvd.TargetScreen',
        navigatorStyle: {
          navBarHidden: true
        }
      }
    });
  }

  startApp(authenticated) {
    if (authenticated) {
      this.startAuthenticatedApp();
    } else {
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'targetmvd.SignUpScreen',
          navigatorStyle: {
            navBarHidden: true
          }
        }
      });
    }
  }
}

export default App;
