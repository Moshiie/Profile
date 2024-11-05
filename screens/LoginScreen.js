import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ setIsLoggedIn, navigation }) {
  return (
    <ImageBackground 
      source={{ uri: 'https://example.com/your-background-image.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Please log in to continue</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#0056b3" style={styles.icon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#A0A0A0" 
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#0056b3" style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#A0A0A0" 
            style={styles.input}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => setIsLoggedIn(true)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('PasswordRecovery')}>
          <Text style={styles.linkText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(242, 242, 242, 0.8)', 
    borderRadius: 10,
    margin: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: '#0056b3', 
    borderWidth: 1,
    borderRadius: 10, 
    marginBottom: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 50,
    flex: 1,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#0056b3', 
    borderRadius: 10, 
    width: '100%',
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20, 
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#0056b3', 
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
