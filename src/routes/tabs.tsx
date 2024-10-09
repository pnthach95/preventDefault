import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from 'screens/home';
import type {BottomTabList, RootStackScreenProps} from 'typings/navigation';

const Tab = createBottomTabNavigator<BottomTabList>();
const NoOp = () => null;
const ICON_SIZE = 24;

const Tabs = ({navigation}: RootStackScreenProps<'Main'>) => {
  return (
    <Tab.Navigator backBehavior="initialRoute">
      <Tab.Screen
        component={HomeScreen}
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <Icon color={color} name="home" size={ICON_SIZE} />
          ),
        }}
      />
      <Tab.Screen
        component={NoOp}
        listeners={{
          tabPress: ({preventDefault}) => {
            preventDefault();
            navigation.navigate('Chat');
          },
        }}
        name="NoOp"
        options={{
          tabBarIcon: ({color}) => (
            <Icon color={color} name="home" size={ICON_SIZE} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name="Settings"
        options={{
          tabBarIcon: ({color}) => (
            <Icon color={color} name="home" size={ICON_SIZE} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
