import React, { useRef } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  LayoutChangeEvent,
  ViewStyle
} from 'react-native';
import { useWalkthroughStep } from 'react-native-interactive-walkthrough';
import { WalkthroughOverlay } from '../components/WalkthroughOverlay';

const { width, height } = Dimensions.get('window');

export function Profile() {

  type ViewRef = React.RefObject<View> & { current: View | null };

  const profileHeaderRef = useRef<View>(null) as ViewRef;
  const userInfoRef = useRef<View>(null) as ViewRef;
  const statsRef = useRef<View>(null) as ViewRef;
  const editButtonRef = useRef<View>(null) as ViewRef;

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

  // Profile Header Step
  const {
    onLayout: headerOnLayout,
    onMeasure: headerOnMeasure
  } = useWalkthroughStep({
    identifier: 'profile-header',
    number: 5,
    measureMask: () => ({
      x: width * 0.25,
      y: 40,
      width: width * 0.5,
      height: 150,
      borderRadius: 10,
      allowInteraction: true
    } as ViewStyle),
    OverlayComponent: (props) => (
      <WalkthroughOverlay
        {...props}
        title="Your Profile Picture"
        description="Tap to edit or change your profile photo"
        totalSteps={12}
        position="bottom"
      />
    )
  });

  // User Info Step
  const {
    onLayout: userInfoOnLayout,
    onMeasure: userInfoOnMeasure
  } = useWalkthroughStep({
    identifier: 'user-info',
    number: 6,
    measureMask: () => ({
      x: width * 0.1,
      y: 220,
      width: width * 0.8,
      height: 100,
      borderRadius: 10,
      allowInteraction: true
    } as ViewStyle),
    OverlayComponent: (props) => (
      <WalkthroughOverlay
        {...props}
        title="Your Information"
        description="Edit your name, bio, and location"
        totalSteps={12}
        position="bottom"
      />
    )
  });

  // Stats Step
  const {
    onLayout: statsOnLayout,
    onMeasure: statsOnMeasure
  } = useWalkthroughStep({
    identifier: 'stats-section',
    number: 7,
    measureMask: () => ({
      x: width * 0.1,
      y: 350,
      width: width * 0.8,
      height: 80,
      borderRadius: 10,
      allowInteraction: false
    } as ViewStyle),
    OverlayComponent: (props) => (
      <WalkthroughOverlay
        {...props}
        title="Your Stats"
        description="Track your posts, followers, and following"
        totalSteps={12}
        position="top"
      />
    )
  });

  // Edit Button Step
  const {
    onLayout: editButtonOnLayout,
    onMeasure: editButtonOnMeasure
  } = useWalkthroughStep({
    identifier: 'edit-button',
    number: 8,
    measureMask: () => ({
      x: width * 0.3,
      y: 450,
      width: width * 0.4,
      height: 50,
      borderRadius: 10,
      allowInteraction: true
    } as ViewStyle),
    OverlayComponent: (props) => (
      <WalkthroughOverlay
        {...props}
        title="Edit Profile"
        description="Tap here to edit your profile settings"
        totalSteps={12}
        position="top"
        showSkip={false}
      />
    )
  });

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View
        ref={profileHeaderRef}
        onLayout={(e) => handleLayout(e, profileHeaderRef, headerOnLayout, headerOnMeasure)}
        style={styles.profileHeader}
      >
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editPhotoButton}>
          <Text style={styles.editPhotoText}>Edit Photo</Text>
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <View
        ref={userInfoRef}
        onLayout={(e) => handleLayout(e, userInfoRef, userInfoOnLayout, userInfoOnMeasure)}
        style={styles.userInfo}
      >
        <Text style={styles.userName}>Alex Johnson</Text>
        <Text style={styles.userBio}>Digital designer & photography enthusiast</Text>
        <Text style={styles.userLocation}>San Francisco, CA</Text>
      </View>

      {/* Stats */}
      <View
        ref={statsRef}
        onLayout={(e) => handleLayout(e, statsRef, statsOnLayout, statsOnMeasure)}
        style={styles.statsContainer}
      >
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>248</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>1.2K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>356</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* Edit Button */}
      <View
        ref={editButtonRef}
        onLayout={(e) => handleLayout(e, editButtonRef, editButtonOnLayout, editButtonOnMeasure)}
        style={styles.actionsContainer}
      >
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
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
  buttonText: {
    color: '#262626',
    fontWeight: '600',
    fontSize: 14,
  },
});