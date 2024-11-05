// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function HomeScreen({ setIsLoggedIn }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
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

        <View style={styles.settingsContainer}>
          <View style={styles.settingRow}>
            <Ionicons name="moon" size={24} color={isDarkMode ? 'white' : 'black'} />
            <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>Dark Mode</Text>
            <Switch value={isDarkMode} onValueChange={toggleSwitch} />
          </View>
          
          {/* Additional settings options here */}
          <TouchableOpacity style={styles.settingRow}>
            <MaterialIcons name="notifications" size={24} color={isDarkMode ? 'white' : 'black'} />
            <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>Notifications</Text>
          </TouchableOpacity>

          {/* Logout Button */}
          <TouchableOpacity style={styles.settingRow} onPress={() => setIsLoggedIn(false)}>
            <MaterialIcons name="logout" size={24} color={isDarkMode ? 'white' : 'black'} />
            <Text style={[styles.settingText, isDarkMode ? styles.lightText : styles.darkText]}>Logout</Text>
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
    borderWidth: 2,
    borderColor: '#6200EE',
  },
  profileTextContainer: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
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
    color: '#333',
  },
  lightBackground: {
    backgroundColor: '#F2F2F2',
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
