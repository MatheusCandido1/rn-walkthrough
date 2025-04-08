import React, { useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useWalkthrough } from 'react-native-interactive-walkthrough';

export const WalkthroughButton = (): React.JSX.Element => {
    const { start, isReady } = useWalkthrough();

    const handleStart = () => {
        console.log('Starting walkthrough');
        if (isReady) {
            start();
        } else {
            console.warn('Walkthrough not ready yet');
        }
    };

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={handleStart}
        >
            <Text style={styles.buttonText}>Start Tour</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 80,
        right: 20,
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 30,
        zIndex: 1000,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});