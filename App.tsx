import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { WalkthroughProvider } from 'react-native-interactive-walkthrough';
import { Tabs } from './src/navigation/Tabs';

export default function App(): React.JSX.Element {
  return (
    <WalkthroughProvider
      backdropColor="rgba(0,0,0,0.7)"
      transitionDuration={300}
      debug={true}
    >
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </WalkthroughProvider>
  );
}