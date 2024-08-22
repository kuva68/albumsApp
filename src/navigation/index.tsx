import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {EnScreens} from '../types/enums';
import AlbumScreen from '../screens/Albums/Index';
import ProfileScreen from '../screens/ProfileScreen';
import TracksScreen from '../screens/TracksScreen/Index';

export type RootStackParamList = {
  [EnScreens.ALBUMS]: undefined;
  [EnScreens.ABOUT]: undefined;
  [EnScreens.TRACKS]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('black');
    }

    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // animation: 'slide_from_right',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name={EnScreens.ALBUMS}
        component={AlbumScreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={EnScreens.ABOUT}
        component={ProfileScreen}
        options={{gestureEnabled: true}}
      />
      <Stack.Screen
        name={EnScreens.TRACKS}
        component={TracksScreen}
        options={{gestureEnabled: true}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
