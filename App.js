// App.js

import React, { useState } from 'react';
import { View, Text, Switch, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* User Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://1cms-img.imgix.net/Momo.jpg?auto=compress' }}
          />
          <View style={styles.profileTextContainer}>
            <Text style={[styles.profileName, isDarkMode ? styles.lightText : styles.darkText]}>Kristy Kate Taylor</Text>
            <Text style={styles.profilePhone}>kristeaiko@gmail.com</Text>
          </View>
        </View>

        {/* Settings List */}
        <View style={styles.settingsContainer}>
          <View style={styles.settingRow}>
            <Ionicons name="moon" size={24} color={isDarkMode ? 'white' : 'black'} />
            <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>Dark Mode</Text>
            <Switch value={isDarkMode} onValueChange={toggleSwitch} />
          </View>

          <TouchableOpacity style={styles.settingRow}>
            <MaterialIcons name="notifications" size={24} color={isDarkMode ? 'white' : 'black'} />
            <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Ionicons name="lock-closed" size={24} color={isDarkMode ? 'white' : 'black'} />
            <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>Privacy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Ionicons name="shield" size={24} color={isDarkMode ? 'white' : 'black'} />
            <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>Security</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Ionicons name="home" size={24} color={isDarkMode ? 'white' : 'black'} />
            <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>Main</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <FontAwesome name="paint-brush" size={24} color={isDarkMode ? 'white' : 'black'} />
            <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>Appearance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Ionicons name="language" size={24} color={isDarkMode ? 'white' : 'black'} />
            <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>Language</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <MaterialIcons name="question-answer" size={24} color={isDarkMode ? 'white' : 'black'} />
            <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>Ask a Question</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Ionicons name="help-circle" size={24} color={isDarkMode ? 'white' : 'black'} />
            <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>FAQ</Text>
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
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileTextContainer: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profilePhone: {
    fontSize: 14,
    color: 'gray',
  },
  settingsContainer: {
    marginTop: 10,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  settingText: {
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  },
  lightBackground: {
    backgroundColor: '#f5f5f5',
  },
  darkBackground: {
    backgroundColor: '#121212',
  },
  lightText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});
