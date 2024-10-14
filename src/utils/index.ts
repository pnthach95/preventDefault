import notifee, {EventType} from '@notifee/react-native';
import {Platform, ToastAndroid} from 'react-native';
import type {Event} from '@notifee/react-native';

export const handleNotification = async (
  {detail, type}: Event,
  foregroundCallback?: () => void,
) => {
  const {notification, pressAction} = detail;
  console.log(notification, pressAction);
  if (type === EventType.ACTION_PRESS && pressAction?.id === 'snooze') {
    if (Platform.OS === 'android') {
      ToastAndroid.show('Snooze pressed', ToastAndroid.SHORT);
    }
    if (notification?.id) {
      await notifee.cancelNotification(notification.id);
    }
    foregroundCallback?.();
  }
};
