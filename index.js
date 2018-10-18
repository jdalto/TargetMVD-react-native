import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/components/App';

debugger;
const app = new App();

AppRegistry.registerComponent(appName, () => app);
