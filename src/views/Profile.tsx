import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { walkthroughable, CopilotStep } from "react-native-copilot";

const WalkthroughableView = walkthroughable(View);
const WalkthroughableText = walkthroughable(Text);
const WalkthroughableImage = walkthroughable(Image);
const WalkthroughableButton = walkthroughable(TouchableOpacity);

export function Profile(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <CopilotStep
        text="This is your profile picture. Tap to edit or change it."
        order={10}
        name="profilePicture"
      >
        <WalkthroughableView style={styles.profileHeader}>
          <WalkthroughableImage
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
            style={styles.profileImage}
          />
          <WalkthroughableButton style={styles.editPhotoButton}>
            <Text style={styles.editPhotoText}>Edit Photo</Text>
          </WalkthroughableButton>
        </WalkthroughableView>
      </CopilotStep>

      {/* User Info */}
      <CopilotStep
        text="Your basic information appears here. Tap to edit your details."
        order={11}
        name="userInfo"
      >
        <WalkthroughableView style={styles.userInfo}>
          <WalkthroughableText style={styles.userName}>Alex Johnson</WalkthroughableText>
          <WalkthroughableText style={styles.userBio}>Digital designer & photography enthusiast</WalkthroughableText>
          <WalkthroughableText style={styles.userLocation}>San Francisco, CA</WalkthroughableText>
        </WalkthroughableView>
      </CopilotStep>

      {/* Stats */}
      <CopilotStep
        text="Your activity statistics. Track your progress here."
        order={12}
        name="statsSection"
      >
        <WalkthroughableView style={styles.statsContainer}>
          <View style={styles.statItem}>
            <WalkthroughableText style={styles.statNumber}>248</WalkthroughableText>
            <WalkthroughableText style={styles.statLabel}>Posts</WalkthroughableText>
          </View>
          <View style={styles.statItem}>
            <WalkthroughableText style={styles.statNumber}>1.2K</WalkthroughableText>
            <WalkthroughableText style={styles.statLabel}>Followers</WalkthroughableText>
          </View>
          <View style={styles.statItem}>
            <WalkthroughableText style={styles.statNumber}>356</WalkthroughableText>
            <WalkthroughableText style={styles.statLabel}>Following</WalkthroughableText>
          </View>
        </WalkthroughableView>
      </CopilotStep>

      {/* Action Buttons */}
      <CopilotStep
        text="Edit your profile or view your activity with these buttons."
        order={13}
        name="actionButtons"
      >
        <WalkthroughableView style={styles.actionsContainer}>
          <WalkthroughableButton style={styles.editProfileButton}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </WalkthroughableButton>
          <WalkthroughableButton style={styles.settingsButton}>
            <Text style={styles.buttonText}>Settings</Text>
          </WalkthroughableButton>
        </WalkthroughableView>
      </CopilotStep>

      {/* Highlights */}
      <CopilotStep
        text="Your story highlights appear here. Add new ones to showcase your best content."
        order={14}
        name="highlights"
      >
        <WalkthroughableView style={styles.highlightsContainer}>
          <Text style={styles.sectionTitle}>Story Highlights</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Travel', 'Food', 'Design', 'Personal'].map((highlight, index) => (
              <WalkthroughableButton key={index} style={styles.highlightItem}>
                <View style={styles.highlightCircle}>
                  <Text style={styles.highlightText}>{highlight[0]}</Text>
                </View>
                <Text style={styles.highlightLabel}>{highlight}</Text>
              </WalkthroughableButton>
            ))}
          </ScrollView>
        </WalkthroughableView>
      </CopilotStep>

      {/* Posts */}
      <CopilotStep
        text="Your posts appear in this grid. Tap to view or add new content."
        order={15}
        name="postsGrid"
      >
        <WalkthroughableView style={styles.postsContainer}>
          <View style={styles.postsGrid}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <WalkthroughableButton key={item} style={styles.postItem}>
                <Image
                  source={{ uri: `https://picsum.photos/300/300?random=${item}` }}
                  style={styles.postImage}
                />
              </WalkthroughableButton>
            ))}
          </View>
        </WalkthroughableView>
      </CopilotStep>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#ff6b6b',
  },
  editPhotoButton: {
    marginTop: 10,
  },
  editPhotoText: {
    color: '#3897f0',
    fontSize: 14,
    fontWeight: '600',
  },
  userInfo: {
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#262626',
    marginBottom: 5,
  },
  userBio: {
    fontSize: 16,
    color: '#262626',
    textAlign: 'center',
    marginBottom: 5,
  },
  userLocation: {
    fontSize: 14,
    color: '#8e8e8e',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#efefef',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#262626',
  },
  statLabel: {
    fontSize: 14,
    color: '#8e8e8e',
    marginTop: 4,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  editProfileButton: {
    backgroundColor: '#efefef',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
  },
  settingsButton: {
    backgroundColor: '#efefef',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#262626',
    fontWeight: '600',
    fontSize: 14,
  },
  highlightsContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#262626',
    marginBottom: 15,
  },
  highlightItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  highlightCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  highlightText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#262626',
  },
  highlightLabel: {
    fontSize: 12,
    color: '#262626',
  },
  postsContainer: {
    paddingHorizontal: 1,
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postItem: {
    width: '33.33%',
    aspectRatio: 1,
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
});