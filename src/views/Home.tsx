import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  LayoutChangeEvent,
  ViewStyle
} from 'react-native';
import { useWalkthroughStep } from 'react-native-interactive-walkthrough';
import { WalkthroughOverlay } from '../components/WalkthroughOverlay';

const { width, height } = Dimensions.get('window');

export const Home: React.FC = () => {

  type ViewRef = React.RefObject<View> & { current: View | null };

  const headerRef = useRef<View>(null) as ViewRef;
  const quickActionsRef = useRef<View>(null) as ViewRef;
  const activityRef = useRef<View>(null) as ViewRef;
  const featuresRef = useRef<View>(null) as ViewRef;

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

  // Header Step
  const {
    onLayout: headerOnLayout,
    onMeasure: headerOnMeasure
  } = useWalkthroughStep({
    identifier: 'home-header',
    number: 1,
    measureMask: () => ({
      x: 20,
      y: 60,
      width: width - 40,
      height: 80,
      borderRadius: 10,
      allowInteraction: true
    } as ViewStyle),
    OverlayComponent: (props) => (
      <WalkthroughOverlay
        {...props}
        title="Welcome to Your Home Screen"
        description="This is where you'll find important information"
        totalSteps={12}
        position="bottom"
      />
    )
  });

  // Quick Actions Step
  const {
    onLayout: quickActionsOnLayout,
    onMeasure: quickActionsOnMeasure
  } = useWalkthroughStep({
    identifier: 'quick-actions',
    number: 2,
    measureMask: () => ({
      x: 20,
      y: 180,
      width: width - 40,
      height: 120,
      borderRadius: 10,
      allowInteraction: true
    } as ViewStyle),
    OverlayComponent: (props) => (
      <WalkthroughOverlay
        {...props}
        title="Quick Actions"
        description="Perform common tasks with one tap"
        totalSteps={12}
        position="right"
      />
    )
  });

  // Recent Activity Step
  const {
    onLayout: activityOnLayout,
    onMeasure: activityOnMeasure
  } = useWalkthroughStep({
    identifier: 'recent-activity',
    number: 3,
    measureMask: () => ({
      x: 20,
      y: 340,
      width: width - 40,
      height: 180,
      borderRadius: 10,
      allowInteraction: true
    } as ViewStyle),
    OverlayComponent: (props) => (
      <WalkthroughOverlay
        {...props}
        title="Recent Activity"
        description="Stay updated with your latest notifications"
        totalSteps={12}
        position="top"
      />
    )
  });

  // Features Step
  const {
    onLayout: featuresOnLayout,
    onMeasure: featuresOnMeasure
  } = useWalkthroughStep({
    identifier: 'features',
    number: 4,
    measureMask: () => ({
      x: 20,
      y: 560,
      width: width - 40,
      height: 200,
      borderRadius: 10,
      allowInteraction: true
    } as ViewStyle),
    OverlayComponent: (props) => (
      <WalkthroughOverlay
        {...props}
        title="Premium Features"
        description="Unlock all features with our premium plan"
        totalSteps={12}
        position="left"
        showSkip={false}
      />
    )
  });

  return (
    <ScrollView style={screenStyles.container}>
      {/* Header Section */}
      <View
        ref={headerRef}
        onLayout={(e) => handleLayout(e, headerRef, headerOnLayout, headerOnMeasure)}
        style={screenStyles.header}
      >
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
          style={screenStyles.profileImage}
        />
        <View>
          <Text style={screenStyles.headerTitle}>Welcome back, Alex!</Text>
          <Text style={screenStyles.headerSubtitle}>Good to see you again</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View
        ref={quickActionsRef}
        onLayout={(e) => handleLayout(e, quickActionsRef, quickActionsOnLayout, quickActionsOnMeasure)}
        style={screenStyles.quickActionsContainer}
      >
        <Text style={screenStyles.sectionTitle}>Quick Actions</Text>
        <View style={screenStyles.actionsRow}>
          <TouchableOpacity style={screenStyles.actionButton}>
            <View style={screenStyles.actionIcon}>
              <Text style={screenStyles.iconText}>📷</Text>
            </View>
            <Text style={screenStyles.actionText}>Upload</Text>
          </TouchableOpacity>

          <TouchableOpacity style={screenStyles.actionButton}>
            <View style={screenStyles.actionIcon}>
              <Text style={screenStyles.iconText}>🔍</Text>
            </View>
            <Text style={screenStyles.actionText}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity style={screenStyles.actionButton}>
            <View style={screenStyles.actionIcon}>
              <Text style={screenStyles.iconText}>⚙️</Text>
            </View>
            <Text style={screenStyles.actionText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Activity */}
      <View
        ref={activityRef}
        onLayout={(e) => handleLayout(e, activityRef, activityOnLayout, activityOnMeasure)}
        style={screenStyles.section}
      >
        <Text style={screenStyles.sectionTitle}>Recent Activity</Text>
        <View style={screenStyles.activityItem}>
          <Text style={screenStyles.activityText}>You have 3 new notifications</Text>
        </View>
        <View style={screenStyles.activityItem}>
          <Text style={screenStyles.activityText}>2 pending friend requests</Text>
        </View>
        <TouchableOpacity style={screenStyles.seeAllButton}>
          <Text style={screenStyles.seeAllText}>See All Activity</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Content */}
      <View
        ref={featuresRef}
        onLayout={(e) => handleLayout(e, featuresRef, featuresOnLayout, featuresOnMeasure)}
        style={screenStyles.section}
      >
        <Text style={screenStyles.sectionTitle}>Featured Today</Text>
        <View style={screenStyles.featuredCard}>
          <Text style={screenStyles.featuredTitle}>Premium Features</Text>
          <Text style={screenStyles.featuredText}>Unlock all features with our premium plan</Text>
          <TouchableOpacity style={screenStyles.premiumButton}>
            <Text style={screenStyles.premiumButtonText}>Upgrade Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    margin: 20,
    marginBottom: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  quickActionsContainer: {
    padding: 20,
    margin: 20,
    marginTop: 0,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    alignItems: 'center',
    width: '30%',
  },
  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconText: {
    fontSize: 24,
  },
  actionText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  section: {
    padding: 20,
    margin: 20,
    marginTop: 0,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  activityItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  activityText: {
    fontSize: 16,
    color: '#333',
  },
  seeAllButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  seeAllText: {
    color: '#3897f0',
    fontSize: 14,
    fontWeight: '600',
  },
  featuredCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  featuredText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  premiumButton: {
    backgroundColor: '#ff9500',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  premiumButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});