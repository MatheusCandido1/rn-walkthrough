import React, { useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  LayoutChangeEvent,
  ViewStyle
} from 'react-native';
import { useWalkthroughStep } from 'react-native-interactive-walkthrough';
import { WalkthroughOverlay } from '../components/WalkthroughOverlay';

const { width, height } = Dimensions.get('window');

type ViewRef = React.RefObject<View> & { current: View | null };

export function Settings() {
  const accountRef = useRef<View>(null) as ViewRef;
  const notificationsRef = useRef<View>(null) as ViewRef;
  const preferencesRef = useRef<View>(null) as ViewRef;
  const supportRef = useRef<View>(null) as ViewRef;

  const handleMeasure = (
    ref: React.RefObject<View>,
    onMeasure: (x: number, y: number, width: number, height: number, pageX: number, pageY: number) => void
  ) => {
    if (ref.current) {
      ref.current.measureInWindow((x, y, width, height) => {
        onMeasure(x, y, width, height, x, y);
      });
    }
  };

  const handleLayout = (
    e: LayoutChangeEvent,
    ref: React.RefObject<View>,
    onLayout: (e: LayoutChangeEvent) => void,
    onMeasure: (x: number, y: number, width: number, height: number, pageX: number, pageY: number) => void
  ) => {
    onLayout(e);
    handleMeasure(ref, onMeasure);
  };

  // Account Settings Step
  const {
    onLayout: accountOnLayout,
    onMeasure: accountOnMeasure
  } = useWalkthroughStep({
    identifier: 'account-settings',
    number: 9,
    measureMask: () => ({
      x: 20,
      y: 20,
      width: width - 40,
      height: 180,
      borderRadius: 10,
      allowInteraction: true
    } as ViewStyle),
    OverlayComponent: (props) => (
      <WalkthroughOverlay
        {...props}
        title="Account Settings"
        description="Manage your account settings here. Tap to update your profile or change password."
        totalSteps={12}
        position="bottom"
      />
    )
  });

  // Notification Settings Step
  const {
    onLayout: notificationsOnLayout,
    onMeasure: notificationsOnMeasure
  } = useWalkthroughStep({
    identifier: 'notification-settings',
    number: 10,
    measureMask: () => ({
      x: 20,
      y: 220,
      width: width - 40,
      height: 180,
      borderRadius: 10,
      allowInteraction: true
    } as ViewStyle),
    OverlayComponent: (props) => (
      <WalkthroughOverlay
        {...props}
        title="Notification Settings"
        description="Customize how you receive notifications from the app."
        totalSteps={12}
        position="bottom"
      />
    )
  });

  // App Preferences Step
  const {
    onLayout: preferencesOnLayout,
    onMeasure: preferencesOnMeasure
  } = useWalkthroughStep({
    identifier: 'app-preferences',
    number: 11,
    measureMask: () => ({
      x: 20,
      y: 420,
      width: width - 40,
      height: 180,
      borderRadius: 10,
      allowInteraction: true
    } as ViewStyle),
    OverlayComponent: (props) => (
      <WalkthroughOverlay
        {...props}
        title="App Preferences"
        description="Personalize your app experience with these preferences."
        totalSteps={12}
        position="bottom"
      />
    )
  });

  // Support Section Step
  const {
    onLayout: supportOnLayout,
    onMeasure: supportOnMeasure
  } = useWalkthroughStep({
    identifier: 'support-section',
    number: 12,
    measureMask: () => ({
      x: 20,
      y: 620,
      width: width - 40,
      height: 180,
      borderRadius: 10,
      allowInteraction: true
    } as ViewStyle),
    OverlayComponent: (props) => (
      <WalkthroughOverlay
        {...props}
        title="Support"
        description="Get help or provide feedback about the app."
        totalSteps={12}
        position="bottom"
        showSkip={false}
      />
    )
  });

  return (
    <ScrollView style={styles.container}>
      {/* Account Settings Section */}
      <View
        ref={accountRef}
        onLayout={(e) => handleLayout(e, accountRef, accountOnLayout, accountOnMeasure)}
        style={styles.section}
      >
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Privacy Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Notification Settings */}
      <View
        ref={notificationsRef}
        onLayout={(e) => handleLayout(e, notificationsRef, notificationsOnLayout, notificationsOnMeasure)}
        style={styles.section}
      >
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Push Notifications</Text>
          <Switch
            value={true}
            style={styles.switch}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Email Notifications</Text>
          <Switch
            value={false}
            style={styles.switch}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Sound Alerts</Text>
          <Switch
            value={true}
            style={styles.switch}
          />
        </View>
      </View>

      {/* App Preferences */}
      <View
        ref={preferencesRef}
        onLayout={(e) => handleLayout(e, preferencesRef, preferencesOnLayout, preferencesOnMeasure)}
        style={styles.section}
      >
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            value={false}
            style={styles.switch}
          />
        </View>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Language: English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Font Size: Medium</Text>
        </TouchableOpacity>
      </View>

      {/* Support Section */}
      <View
        ref={supportRef}
        onLayout={(e) => handleLayout(e, supportRef, supportOnLayout, supportOnMeasure)}
        style={styles.section}
      >
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Report a Problem</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    paddingLeft: 8,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  switch: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
});