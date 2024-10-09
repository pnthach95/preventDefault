import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigation';

const Routes = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Routes;
