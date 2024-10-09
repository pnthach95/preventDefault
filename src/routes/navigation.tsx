import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './tabs';
import ChatScreen from 'screens/chat';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type {RootStackParamList} from 'typings/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Tabs}
          name="Main"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ChatScreen}
          name="Chat"
          options={({navigation}) => ({
            headerLeft: () => (
              <Icon
                name="play"
                size={24}
                color="black"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
