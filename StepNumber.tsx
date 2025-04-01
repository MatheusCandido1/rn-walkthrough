import React from 'react';
import { View, Text } from 'react-native';
import { copilotStyles } from './App';

export const StepNumber = ({ currentStepNumber }: { currentStepNumber: number; }) => (
    <View style={copilotStyles.stepNumberContainer}>
        <Text style={copilotStyles.stepNumberText}>{currentStepNumber}</Text>
    </View>
);
