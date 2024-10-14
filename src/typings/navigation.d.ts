import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

type BottomTabList = {
  Home: undefined;
  NoOp: undefined;
  Settings: undefined;
};

type MainBottomTabScreenProps<T extends keyof BottomTabList> = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabList, T>,
    StackNavigationProp<RootStackParamList>
  >;
};

type RootStackParamList = {
  Main: undefined;
  Chat: undefined;
  Notification: undefined;
};

type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
