import {AppRegistry} from 'react-native';
import App from './src/routes';
import {name as appName} from './app.json';
import notifee from '@notifee/react-native';
import {handleNotification} from 'utils';

notifee.onBackgroundEvent(async (data) => {
  handleNotification(data)
});

AppRegistry.registerComponent(appName, () => App);
