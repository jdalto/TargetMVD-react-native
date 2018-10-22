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
    // this.authenticated = false;
    sessionService.initSessionService(store);
    //store.subscribe(this.onStoreUpdate.bind(this));
    this.startApp();
  }

  onStoreUpdate() {
    debugger;
    if (!this.appInitialized) { 
      this.startApp(authenticated);
    }
  }

    startApp(){
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

export default App;