import React, { useState } from "react";
import { Button, Text, TouchableHighlight, View, StyleSheet, TextInput, Image, Platform, StatusBar } from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";

export function Home() {
  const [defaultTipVisible, setDefaultTipVisible] = useState(false);
  const [toolTipVisible, setToolTipVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const [imageTooltipVisible, setImageTooltipVisible] = useState(false);
  const [buttonTooltipVisible, setButtonTooltipVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Default Tooltip with Enhanced Features</Text>
      <Tooltip
        isVisible={defaultTipVisible}
        content={<Text>Check this out!</Text>}
        onClose={() => setDefaultTipVisible(false)}
      >
        <TouchableHighlight style={styles.touchable} onPress={() => setDefaultTipVisible(true)}>
          <Text>Default Tooltip</Text>
        </TouchableHighlight>
      </Tooltip>

      <Text style={styles.header}>TouchableHighlight Tooltip</Text>
      <Tooltip
        isVisible={toolTipVisible}
        content={<Text>Button Tooltip with custom styling</Text>}
        placement="top"
        onClose={() => setToolTipVisible(false)}
        arrowSize={{ width: 20, height: 10 }}
        backgroundStyle={styles.backgroundStyle}
        tooltipStyle={styles.tooltipHighlight}
        contentStyle={styles.contentStyle}
        arrowStyle={styles.arrowStyle}
        displayInsets={{ top: 30, bottom: 30, left: 30, right: 30 }}
        disableShadow={true}
        supportedOrientations={['portrait']}
        useInteractionManager={false}
        childContentSpacing={15}
        showChildInTooltip={false}
      >
        <TouchableHighlight style={styles.touchable} onPress={() => setToolTipVisible(true)}>
          <Text>Press me</Text>
        </TouchableHighlight>
      </Tooltip>

      <Text style={styles.header}>Button Tooltip</Text>
      <Tooltip
        isVisible={buttonTooltipVisible}
        content={<Text>This is a button with left placement</Text>}
        placement="left"
        onClose={() => setButtonTooltipVisible(false)}
        tooltipStyle={styles.tooltipButton}
        backgroundStyle={styles.backgroundStyle}
        arrowStyle={styles.arrowStyle}
        contentStyle={styles.contentStyle}
        arrowSize={{ width: 12, height: 6 }}
        closeOnContentInteraction={false}
        displayInsets={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Button title="Click Me" onPress={() => setButtonTooltipVisible(true)} />
      </Tooltip>

      <Text style={styles.header}>Image Tooltip</Text>
      <Tooltip
        isVisible={imageTooltipVisible}
        content={<Text>This is an image tooltip</Text>}
        placement="right"
        onClose={() => setImageTooltipVisible(false)}
        tooltipStyle={styles.tooltipImage}
        backgroundStyle={styles.backgroundStyle}
        arrowStyle={styles.arrowStyle}
        contentStyle={styles.contentStyle}
        childContentSpacing={20}
        supportedOrientations={['portrait', 'landscape-left', 'landscape-right']}
        useReactNativeModal={false}
      >
        <TouchableHighlight onPress={() => setImageTooltipVisible(true)}>
          <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.image} />
        </TouchableHighlight>
      </Tooltip>

      <Text style={styles.header}>TextInput Tooltip</Text>
      <Tooltip
        isVisible={textInputValue.length > 0}
        content={<Text>You're typing: {textInputValue}</Text>}
        placement="bottom"
        onClose={() => setTextInputValue("")}
        tooltipStyle={styles.tooltipInput}
        backgroundStyle={styles.backgroundStyle}
        arrowStyle={styles.arrowStyle}
        contentStyle={styles.contentStyle}
        arrowSize={{ width: 14, height: 7 }}
        displayInsets={{ top: 15, bottom: 15, left: 15, right: 15 }}
        horizontalAdjustment={-10}
      >
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          value={textInputValue}
          onChangeText={setTextInputValue}
        />
      </Tooltip>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  touchable: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginTop: 10,
    width: 200,
    borderRadius: 4,
  },
  tooltipDefault: {
    backgroundColor: 'rgba(100, 100, 100, 0.9)',
    padding: 10,
    borderRadius: 5,
  },
  tooltipHighlight: {
    backgroundColor: 'rgba(255, 165, 0, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
  tooltipButton: {
    backgroundColor: 'rgba(0, 128, 0, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
  tooltipImage: {
    backgroundColor: 'rgba(0, 0, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
  tooltipInput: {
    backgroundColor: 'rgba(128, 0, 128, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
  backgroundStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  arrowStyle: {
    borderTopColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 1,
  },
  contentStyle: {
    padding: 5,
  },
  childrenWrapperStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  parentWrapperStyle: {
    padding: 2,
  },
});
