import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { walkthroughable, CopilotStep } from "react-native-copilot";

const WalkthroughableView = walkthroughable(View);
const WalkthroughableText = walkthroughable(Text);
const WalkthroughableImage = walkthroughable(Image);
const WalkthroughableButton = walkthroughable(TouchableOpacity);

export function Home(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <CopilotStep text="This is your home screen header" order={1} name="homeHeader">
        <WalkthroughableView style={styles.header}>
          <WalkthroughableImage
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
            style={styles.profileImage}
          />
          <WalkthroughableText style={styles.headerTitle}>Welcome back, Alex!</WalkthroughableText>
        </WalkthroughableView>
      </CopilotStep>

      {/* Quick Actions */}
      <CopilotStep text="Quick actions let you perform common tasks with one tap" order={2} name="quickActions">
        <WalkthroughableView style={styles.quickActionsContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsRow}>
            <WalkthroughableButton style={styles.actionButton}>
              <View style={styles.actionIcon}>
                <Text style={styles.iconText}>📷</Text>
              </View>
              <Text style={styles.actionText}>Upload</Text>
            </WalkthroughableButton>

            <WalkthroughableButton style={styles.actionButton}>
              <View style={styles.actionIcon}>
                <Text style={styles.iconText}>🔍</Text>
              </View>
              <Text style={styles.actionText}>Search</Text>
            </WalkthroughableButton>

            <WalkthroughableButton style={styles.actionButton}>
              <View style={styles.actionIcon}>
                <Text style={styles.iconText}>⚙️</Text>
              </View>
              <Text style={styles.actionText}>Settings</Text>
            </WalkthroughableButton>
          </View>
        </WalkthroughableView>
      </CopilotStep>

      {/* Recent Activity */}
      <CopilotStep text="Check your recent activity and notifications here" order={3} name="recentActivity">
        <WalkthroughableView style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <WalkthroughableView style={styles.activityItem}>
            <Text style={styles.activityText}>You have 3 new notifications</Text>
          </WalkthroughableView>
          <WalkthroughableView style={styles.activityItem}>
            <Text style={styles.activityText}>2 pending friend requests</Text>
          </WalkthroughableView>
          <WalkthroughableButton style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See All Activity</Text>
          </WalkthroughableButton>
        </WalkthroughableView>
      </CopilotStep>

      {/* Featured Content */}
      <CopilotStep text="Discover featured content recommended for you" order={4} name="featuredContent">
        <WalkthroughableView style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Today</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((item) => (
              <WalkthroughableButton key={item} style={styles.featuredCard}>
                <Image
                  source={{ uri: `https://picsum.photos/300/200?random=${item}` }}
                  style={styles.featuredImage}
                />
                <Text style={styles.featuredTitle}>Featured Item {item}</Text>
              </WalkthroughableButton>
            ))}
          </ScrollView>
        </WalkthroughableView>
      </CopilotStep>

      {/* Statistics */}
      <CopilotStep text="Track your weekly progress with these statistics" order={5} name="statistics">
        <WalkthroughableView style={styles.section}>
          <Text style={styles.sectionTitle}>Your Weekly Stats</Text>
          <View style={styles.statsContainer}>
            <WalkthroughableView style={styles.statItem}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </WalkthroughableView>
            <WalkthroughableView style={styles.statItem}>
              <Text style={styles.statNumber}>156</Text>
              <Text style={styles.statLabel}>Views</Text>
            </WalkthroughableView>
            <WalkthroughableView style={styles.statItem}>
              <Text style={styles.statNumber}>89%</Text>
              <Text style={styles.statLabel}>Engagement</Text>
            </WalkthroughableView>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
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
  quickActionsContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
    width: 200,
    marginRight: 15,
  },
  featuredImage: {
    width: 200,
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
    padding: 10,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  tipItem: {
    paddingVertical: 8,
  },
  tipText: {
    fontSize: 15,
    color: '#333',
  },
});