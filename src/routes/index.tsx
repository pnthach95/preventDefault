import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigation';
import notifee, {AuthorizationStatus} from '@notifee/react-native';
import {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';

const requestMessagingPermission = async () => {
  if (Platform.OS === 'ios') {
    const authStatus = await notifee.requestPermission();
    const result =
      authStatus.authorizationStatus === AuthorizationStatus.AUTHORIZED ||
      authStatus.authorizationStatus === AuthorizationStatus.PROVISIONAL;
    return result;
  }
  const ch = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  );
  if (ch) {
    return true;
  }
  const req = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  );
  return req === PermissionsAndroid.RESULTS.GRANTED;
};

const Routes = () => {
  useEffect(() => {
    requestMessagingPermission();
    setCategories();
  }, []);

  async function setCategories() {
    await notifee.setNotificationCategories([
      {
        id: 'snooze',
        actions: [
          {
            id: 'snooze',
            title: 'Snooze',
          },
        ],
      },
    ]);
    await notifee.createChannel({id: 'alarms', name: 'Alarms'});
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Routes;
