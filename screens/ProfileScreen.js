import React, { useState } from 'react';
import { View, Text, Switch, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const SettingItem = ({ icon, text, onPress, isDarkMode }) => (
  <TouchableOpacity style={styles.settingRow} onPress={onPress}>
    {icon}
    <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>{text}</Text>
  </TouchableOpacity>
);

export default function HomeScreen({ setIsLoggedIn }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () => setIsDarkMode((prev) => !prev);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: () => setIsLoggedIn(false) },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={[styles.profileContainer, styles.card, isDarkMode ? styles.cardDark : styles.cardLight]}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://1cms-img.imgix.net/Momo.jpg?auto=compress' }}
          />
          <View style={styles.profileTextContainer}>
            <Text style={[styles.profileName, isDarkMode ? styles.lightText : styles.darkText]}>Kristy Kate Taylor</Text>
            <Text style={[styles.profileEmail, isDarkMode ? styles.lightText : styles.darkText]}>kristeaiko@gmail.com</Text>
          </View>
        </View>

        <View style={[styles.settingsContainer, styles.card, isDarkMode ? styles.cardDark : styles.cardLight]}>
          <View style={styles.settingRow}>
            <Ionicons name="moon" size={24} color={isDarkMode ? '#FFD700' : '#333'} />
            <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>Dark Mode</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isDarkMode}
              accessibilityLabel="Toggle Dark Mode"
            />
          </View>

          <SettingItem
            icon={<MaterialIcons name="notifications" size={24} color={isDarkMode ? '#FFD700' : '#333'} />}
            text="Notifications"
            isDarkMode={isDarkMode}
          />

          <SettingItem
            icon={<MaterialIcons name="privacy-tip" size={24} color={isDarkMode ? '#FFD700' : '#333'} />}
            text="Privacy Settings"
            isDarkMode={isDarkMode}
          />

          <SettingItem
            icon={<MaterialIcons name="account-circle" size={24} color={isDarkMode ? '#FFD700' : '#333'} />}
            text="Account Settings"
            isDarkMode={isDarkMode}
          />

          <SettingItem
            icon={<MaterialIcons name="help-outline" size={24} color={isDarkMode ? '#FFD700' : '#333'} />}
            text="Help & Support"
            isDarkMode={isDarkMode}
          />

          <SettingItem
            icon={<MaterialIcons name="language" size={24} color={isDarkMode ? '#FFD700' : '#333'} />}
            text="Language Preferences"
            isDarkMode={isDarkMode}
          />

          <SettingItem
            icon={<MaterialIcons name="color-lens" size={24} color={isDarkMode ? '#FFD700' : '#333'} />}
            text="Theme Settings"
            isDarkMode={isDarkMode}
          />

          <SettingItem
            icon={<MaterialIcons name="data-usage" size={24} color={isDarkMode ? '#FFD700' : '#333'} />}
            text="Data Usage"
            isDarkMode={isDarkMode}
          />

          <SettingItem
            icon={<MaterialIcons name="feedback" size={24} color={isDarkMode ? '#FFD700' : '#333'} />}
            text="Feedback"
            isDarkMode={isDarkMode}
          />

          <TouchableOpacity
            style={[styles.logoutButton, isDarkMode ? styles.logoutButtonDark : styles.logoutButtonLight]}
            onPress={handleLogout}
          >
            <MaterialIcons name="logout" size={24} color="white" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#6200EE',
  },
  profileTextContainer: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
    marginTop: 3,
  },
  settingsContainer: {
    borderRadius: 10,
    paddingVertical: 10,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  logoutText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  lightBackground: {
    backgroundColor: '#F0F0F5',
  },
  darkBackground: {
    backgroundColor: '#1E1E1E',
  },
  lightText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#333333',
  },
  card: {
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  cardLight: {
    backgroundColor: '#FFF',
  },
  cardDark: {
    backgroundColor: '#333',
  },
  logoutButtonLight: {
    backgroundColor: '#FF6347',
  },
  logoutButtonDark: {
    backgroundColor: '#FF4500',
  },
});
