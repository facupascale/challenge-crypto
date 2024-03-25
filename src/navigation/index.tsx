import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { RoutesParamList } from '@types';
import { ROUTES } from '@constants';
import { useAuthStore, useCoinStore } from '@store';
import { DetailCoin, Home, Login } from '@screens';

const Stack = createStackNavigator<RoutesParamList>();

const Navigation = (): React.JSX.Element => {
  const { loggedIn } = useAuthStore();

  useEffect(() => {
    useCoinStore.persist.hasHydrated() && useAuthStore.persist.hasHydrated() && SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {!loggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name={ROUTES.LOGIN} component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName={ROUTES.HOME}>
          <Stack.Screen
            name={ROUTES.HOME}
            component={Home}
            options={{ headerShown: false, title: 'Home' }}
          />
          <Stack.Screen
            name={ROUTES.DETAIL_COIN}
            component={DetailCoin}
            options={({ route }) => ({
              title: route.params.item?.name || 'Detail Coin',
              presentation: 'modal',
            })}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export { Navigation };
