import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

const stories = [
  {
    id: '1',
    name: 'Create story',
    image: { uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
    isCreate: true,
  },
  {
    id: '2',
    name: 'John Smith',
    image: { uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
  },
  {
    id: '3',
    name: 'Sarah Wilson',
    image: { uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face' },
  },
  {
    id: '4',
    name: 'Mike Johnson',
    image: { uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face' },
  },
];

const posts = [
  {
    id: '1',
    user: {
      name: 'Tech News Daily',
      avatar: { uri: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop' },
      time: '2h',
    },
    text: 'Breaking: New smartphone technology revolutionizes mobile photography. More details in the comments...',
    image: { uri: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop' },
    reactions: 1247,
    comments: 89,
    shares: 156,
  },
  {
    id: '2',
    user: {
      name: 'Travel Adventures',
      avatar: { uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop' },
      time: 'Sponsored',
    },
    text: 'Discover amazing destinations around the world. Book your next adventure with us and save 30%!',
    image: { uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop' },
    reactions: 892,
    comments: 45,
    shares: 78,
  },
  {
    id: '3',
    user: {
      name: 'Food & Recipe',
      avatar: { uri: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop' },
      time: '4h',
    },
    text: 'Homemade pasta recipe that will change your life! Easy to follow steps and ingredients you already have at home...',
    image: { uri: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=400&fit=crop' },
    reactions: 567,
    comments: 23,
    shares: 34,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>facebook</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconBox}>
            <Text style={styles.icon}><Feather name="plus-square" size={24} color="white" /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Text style={styles.icon}><Feather name="search" size={24} color="white" /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Text style={styles.icon}><FontAwesome5 name="facebook-messenger" size={24} color="white" /></Text>
            <View style={styles.badge}><Text style={styles.badgeText}>3</Text></View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.mainScrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputBox}>
          <Image source={stories[0].image} style={styles.profilePic} />
          <TextInput
            style={styles.input}
            placeholder="What's on your mind?"
            placeholderTextColor="#888"
          />
          <Feather name="image" size={20} color="white" />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storiesContainer}
        >
          {stories.map((item) => (
            <View key={item.id} style={styles.storyItem}>
              <Image source={item.image} style={styles.storyImage} />
              {!item.isCreate && (
                <>
                  <View style={styles.profileRing}>
                    <Image source={item.image} style={styles.storyProfilePic} />
                    <View style={styles.onlineIndicator} />
                  </View>
                  <View style={styles.storyNameContainer}>
                    <Text style={styles.storyName}>{item.name}</Text>
                  </View>
                </>
              )}
              {item.isCreate && (
                <>
                  <View style={styles.createStoryCircle}>
                    <Text style={styles.createStoryPlus}>+</Text>
                  </View>
                  <View style={styles.storyNameContainer}>
                    <Text style={styles.storyName}>{item.name}</Text>
                  </View>
                </>
              )}
            </View>
          ))}
        </ScrollView>

        {/* Posts */}
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.postsList}
          renderItem={({ item }) => (
            <View style={styles.postCard}>
              {/* Post Header */}
              <View style={styles.postHeader}>
                <Image source={item.user.avatar} style={styles.postAvatar} />
                <View>
                  <Text style={styles.postUser}>{item.user.name}</Text>
                  <Text style={styles.postTime}>{item.user.time} <Ionicons name="earth" size={12} color="white"/></Text>
                </View>
                <View style={{ flex: 1 }} />
                <TouchableOpacity>
                  <Text style={styles.postMenu}>⋯ <Entypo name="cross" size={24} color="white" /></Text>
                </TouchableOpacity>
              </View>

              {item.text ? <Text style={styles.postText}>{item.text}</Text> : null}

              {item.image ? (
                <Image source={item.image} style={styles.postImage} />
              ) : null}

              <View style={styles.postActions}>
                <View style={styles.postStatsRow}>
                  <Text style={styles.statsTextLeft}>👍😆❤️ {item.reactions}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.statsTextRight}>{item.comments} comments</Text>
                    <Text style={styles.statsTextRight}> · {item.shares} shares</Text>
                  </View>
                </View>
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.actionBtn}>
                    <Text style={styles.actionIcon}>
                      <AntDesign name="like2" size={24} color="white" />
                    </Text>
                    <Text style={styles.actionText}>Like</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionBtn}>
                    <Text style={styles.actionIcon}>
                      <FontAwesome5 name="comment" size={24} color="white" />
                    </Text>
                    <Text style={styles.actionText}>Comment</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionBtn}>
                    <Text style={styles.actionIcon}>
                      <FontAwesome5 name="share" size={24} color="white" />
                    </Text>
                    <Text style={styles.actionText}>Share</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#18191A', paddingTop: 40 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, marginBottom: 8 },
  time: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginRight: 12 },
  logo: { color: '#fff', fontWeight: 'bold', fontSize: 28, flex: 1 },
  mainScrollView: { flex: 1 },
  headerIcons: { flexDirection: 'row', alignItems: 'center', fontSize: 28 },
  iconBox: { marginHorizontal: 4, position: 'relative' },
  icon: { color: '#fff', fontSize: 22 },
  badge: { position: 'absolute', top: -6, right: -6, backgroundColor: 'red', borderRadius: 8, paddingHorizontal: 4 },
  badgeText: { color: '#fff', fontSize: 12 },
  inputBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#242526', margin: 12, borderRadius: 24, padding: 8 },
  profilePic: { width: 36, height: 36, borderRadius: 18, marginRight: 8 },
  input: { flex: 1, color: '#fff', fontSize: 16 },
  storiesContainer: {
    marginVertical: 8,
    marginHorizontal: 12,
    marginBottom: 8
  },
  storyItem: {
    width: 120,
    height: 200,
    marginRight: 8,
    position: 'relative',
    borderRadius: 15,
    overflow: 'hidden',
  },
  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  profileRing: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#1877F2',
    padding: 2,
  },
  storyProfilePic: {
    width: '100%',
    height: '100%',
    borderRadius: 17,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#42B883',
    borderWidth: 2,
    borderColor: '#fff',
  },
  storyNameContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
  },
  storyName: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  createStoryCircle: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    backgroundColor: '#1877F2',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#18191A',
  },
  createStoryPlus: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  postsList: { flex: 1, marginTop: 8 },
  postCard: { backgroundColor: '#242526', margin: 8, borderRadius: 12, padding: 12 },
  postHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  postAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 8 },
  postUser: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  postTime: { color: '#aaa', fontSize: 12 },
  postMenu: { color: '#fff', fontSize: 22, marginLeft: 8 },
  postText: { color: '#fff', fontSize: 14, marginBottom: 8 },
  postImage: { width: '100%', height: 180, borderRadius: 12, marginBottom: 8 },
  postActions: { marginTop: 8 },
  postStatsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  statsTextLeft: { color: '#aaa', fontSize: 12 },
  statsTextRight: { color: '#aaa', fontSize: 12, marginLeft: 8 },
  actionButtons: { flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderColor: '#333', paddingTop: 8 },
  actionBtn: { flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'center', padding: 8 },
  actionIcon: { fontSize: 18, marginRight: 6 },
  actionText: { color: '#fff', fontSize: 15 },
});