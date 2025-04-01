import React from 'react';
import { View } from 'react-native';
import { Tabs } from './src/navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { CopilotProvider } from 'react-native-copilot';
import { CopilotButton } from './src/components/CopilotButton';

export default function App(): React.JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <CopilotProvider
          animated={true}
          overlay="svg"
        //verticalOffset={20}
        >
          <Tabs />
          <CopilotButton />
        </CopilotProvider>
      </NavigationContainer>
    </View>
  );
}