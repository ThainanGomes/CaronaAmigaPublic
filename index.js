/**
 * @format
 */
import 'react-native-gesture-handler'; //gestos: arrastar dedo sobre a tela...
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
