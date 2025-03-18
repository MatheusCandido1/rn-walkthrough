/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { Tabs } from './src/navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';

export default function App(): React.JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </View>
  );
}
