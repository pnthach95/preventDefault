import {Button, StyleSheet, View} from 'react-native';
import notifee from '@notifee/react-native';

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const HomeScreen = () => {
  const displayNoti = () => {
    notifee.displayNotification({
      title: '08:00am Alarm',
      body: 'The alarm you set for 08:00am requires attention!',
      android: {
        channelId: 'alarms',
        actions: [
          {
            title: 'Snooze',
            pressAction: {
              id: 'snooze',
            },
          },
        ],
      },
      ios: {categoryId: 'snooze'},
    });
  };

  return (
    <View style={styles.main}>
      <Button title="Show notification" onPress={displayNoti} />
    </View>
  );
};

export default HomeScreen;
