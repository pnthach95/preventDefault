import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {color: 'black'},
});

const NotificationScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>You pressed notification action</Text>
    </View>
  );
};

export default NotificationScreen;
