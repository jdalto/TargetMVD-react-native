import configureStore from '../store/configureStore';
import registerScreens from '../screens';
import { Navigation } from 'react-native-navigation';
import { sessionService } from 'redux-react-native-session';

const store = configureStore();
registerScreens(store);

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
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          stack: {
            children: [{
              component: {
                name: 'targetmvd.TargetScreen',
                options: {
                  backButton: {
                    visible: false,
                    color: 'green',
                  },
                  topBar: {
                    title: {
                      text: 'Target Points',
                      alignment: 'center'
                    },
                    leftButtons: {
                      id: 'profile',
                      component: {
                        name: 'targetmvd.ProfileNavBarButton'
                      }
                    },
                    rightButtons: {
                      id: 'chat',
                      component: {
                        name: 'targetmvd.ChatNavBarButton'
                      }
                    },
                    visible: true
                  }
                }
              }
            }]
          }
        }
      });
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
