import React, { useState } from 'react';
import {
    ViewStyle,
    Animated,
    Easing,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';

const { width, height } = Dimensions.get('window');

interface WalkthroughOverlayProps {
    title: string;
    description?: string;
    next?: () => void;
    previous?: () => void;
    stop?: () => void;
    currentStepNumber?: number;
    totalSteps?: number;
    position?: 'top' | 'bottom' | 'left' | 'right';
    style?: ViewStyle;
    titleStyle?: any;
    buttonStyle?: ViewStyle;
    buttonTextStyle?: any;
    showProgress?: boolean;
    showSkip?: boolean;
}

export const WalkthroughOverlay: React.FC<WalkthroughOverlayProps> = ({
    title, description, next, previous, stop, currentStepNumber = 1, totalSteps = 4,
    position = 'bottom', style, titleStyle, buttonStyle, buttonTextStyle,
    showProgress = true, showSkip = true,
}) => {
    const [animation] = useState(new Animated.Value(0));

    React.useEffect(() => {
        Animated.sequence([
            Animated.timing(animation, {
                toValue: 1,
                duration: 300,
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
            }),
            Animated.spring(animation, {
                toValue: 0.98,
                friction: 3,
                useNativeDriver: true,
            }),
            Animated.spring(animation, {
                toValue: 1,
                friction: 3,
                useNativeDriver: true,
            })
        ]).start();
    }, [currentStepNumber]);

    const isFirstStep = currentStepNumber === 1;
    const isLastStep = currentStepNumber === totalSteps;

    const getPositionStyle = (): ViewStyle => {
        const baseStyle = overlayStyles.base;
        const positionStyles = {
            top: overlayStyles.topPosition,
            bottom: overlayStyles.bottomPosition,
            left: overlayStyles.leftPosition,
            right: overlayStyles.rightPosition,
        };
        return { ...baseStyle, ...positionStyles[position] };
    };

    const getButtonLayoutStyle = (): ViewStyle => {
        return position === 'left' || position === 'right'
            ? overlayStyles.verticalButtons
            : overlayStyles.horizontalButtons;
    };

    const animatedStyle = {
        transform: [{ scale: animation }],
        opacity: animation
    };

    return (
        <Animated.View style={[getPositionStyle(), style, animatedStyle]}>
            <View style={overlayStyles.content}>
                <Text style={[overlayStyles.title, titleStyle]}>{title}</Text>

                {description && (
                    <Text style={overlayStyles.description}>{description}</Text>
                )}

                {showProgress && (
                    <View style={overlayStyles.progressContainer}>
                        <View style={overlayStyles.progressBar}>
                            <View style={[
                                overlayStyles.progressFill,
                                { width: `${(currentStepNumber / totalSteps) * 100}%` }
                            ]} />
                        </View>
                        <Text style={overlayStyles.progressText}>
                            {currentStepNumber}/{totalSteps}
                        </Text>
                    </View>
                )}
            </View>

            <View style={[overlayStyles.buttonContainer, getButtonLayoutStyle()]}>
                {showSkip && !isLastStep && (
                    <TouchableOpacity onPress={stop} style={overlayStyles.skipButton}>
                        <Text style={overlayStyles.skipText}>Skip</Text>
                    </TouchableOpacity>
                )}

                <View style={[overlayStyles.navButtons, getButtonLayoutStyle()]}>
                    {!isFirstStep && (
                        <TouchableOpacity
                            onPress={previous}
                            style={[overlayStyles.navButton, overlayStyles.secondaryButton]}
                        >
                            <Text style={overlayStyles.buttonText}>Back</Text>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity
                        onPress={isLastStep ? stop : next}
                        style={[overlayStyles.navButton, overlayStyles.primaryButton, buttonStyle]}
                    >
                        <Text style={[overlayStyles.buttonText, buttonTextStyle]}>
                            {isLastStep ? 'Finish' : 'Next'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
    );
};

export const overlayStyles = StyleSheet.create({
    base: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        maxWidth: '80%',
    },
    topPosition: {
        top: 30,
        left: 20,
        right: 20,
        bottom: undefined,
    },
    bottomPosition: {
        bottom: 40,
        left: 20,
        right: 20,
        top: undefined,
    },
    leftPosition: {
        left: 20,
        top: height * 0.3,
        right: undefined,
        bottom: undefined,
        width: width * 0.6
    },
    rightPosition: {
        right: 20,
        top: height * 0.3,
        left: undefined,
        bottom: undefined,
        width: width * 0.6
    },
    content: {
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 15,
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    progressBar: {
        flex: 1,
        height: 4,
        backgroundColor: '#e0e0e0',
        borderRadius: 2,
        overflow: 'hidden',
        marginRight: 10,
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#6200ee',
    },
    progressText: {
        fontSize: 12,
        color: '#888',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    horizontalButtons: {
        flexDirection: 'row',
    },
    verticalButtons: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    navButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
    },
    navButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        marginLeft: 10,
        minWidth: 80,
        alignItems: 'center',
    },
    primaryButton: {
        backgroundColor: '#6200ee',
    },
    secondaryButton: {
        backgroundColor: '#e0e0e0',
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
    },
    skipButton: {
        padding: 10,
    },
    skipText: {
        color: '#888',
        fontWeight: '600',
    },
});