import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../views/Home';
import { Profile } from '../views/Profile';
import { Settings } from '../views/Settings';
import { WalkthroughButton } from '../components/WalkthroughButton';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { position: 'absolute' },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      <WalkthroughButton />
    </View>
  );
};