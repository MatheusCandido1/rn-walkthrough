import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useCopilot } from 'react-native-copilot';

export const CopilotButton = (): React.JSX.Element => {
    const { start } = useCopilot();

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => start()}
        >
            <Text style={styles.buttonText}>Start Tour</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 90,
        right: 20,
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        zIndex: 999,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});