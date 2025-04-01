import { Text, View, StyleSheet, Switch, TouchableOpacity, ScrollView } from "react-native";
import { walkthroughable, CopilotStep } from "react-native-copilot";

const WalkthroughableView = walkthroughable(View);
const WalkthroughableText = walkthroughable(Text);
const WalkthroughableSwitch = walkthroughable(Switch);
const WalkthroughableButton = walkthroughable(TouchableOpacity);

export function Settings(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      {/* Account Settings Section */}
      <CopilotStep
        text="Manage your account settings here. Tap to update your profile or change password."
        order={6}
        name="accountSettings"
      >
        <WalkthroughableView style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <WalkthroughableButton style={styles.settingItem}>
            <Text style={styles.settingText}>Edit Profile</Text>
          </WalkthroughableButton>
          <WalkthroughableButton style={styles.settingItem}>
            <Text style={styles.settingText}>Change Password</Text>
          </WalkthroughableButton>
          <WalkthroughableButton style={styles.settingItem}>
            <Text style={styles.settingText}>Privacy Settings</Text>
          </WalkthroughableButton>
        </WalkthroughableView>
      </CopilotStep>

      {/* Notification Settings */}
      <CopilotStep
        text="Customize how you receive notifications from the app."
        order={7}
        name="notificationSettings"
      >
        <WalkthroughableView style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Push Notifications</Text>
            <WalkthroughableSwitch
              value={true}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Email Notifications</Text>
            <WalkthroughableSwitch
              value={false}
              style={styles.switch}
            />
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Sound Alerts</Text>
            <WalkthroughableSwitch
              value={true}
              style={styles.switch}
            />
          </View>
        </WalkthroughableView>
      </CopilotStep>

      {/* App Preferences */}
      <CopilotStep
        text="Personalize your app experience with these preferences."
        order={8}
        name="appPreferences"
      >
        <WalkthroughableView style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Dark Mode</Text>
            <WalkthroughableSwitch
              value={false}
              style={styles.switch}
            />
          </View>
          <WalkthroughableButton style={styles.settingItem}>
            <Text style={styles.settingText}>Language: English</Text>
          </WalkthroughableButton>
          <WalkthroughableButton style={styles.settingItem}>
            <Text style={styles.settingText}>Font Size: Medium</Text>
          </WalkthroughableButton>
        </WalkthroughableView>
      </CopilotStep>

      {/* Support Section */}
      <CopilotStep
        text="Get help or provide feedback about the app."
        order={9}
        name="supportSection"
      >
        <WalkthroughableView style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <WalkthroughableButton style={styles.settingItem}>
            <Text style={styles.settingText}>Help Center</Text>
          </WalkthroughableButton>
          <WalkthroughableButton style={styles.settingItem}>
            <Text style={styles.settingText}>Contact Us</Text>
          </WalkthroughableButton>
          <WalkthroughableButton style={styles.settingItem}>
            <Text style={styles.settingText}>Report a Problem</Text>
          </WalkthroughableButton>
        </WalkthroughableView>
      </CopilotStep>

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
  versionText: {
    color: '#666',
  },
  switch: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
});