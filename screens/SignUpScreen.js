import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, ImageBackground, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // Add your signup logic here (e.g., API call)
    
    // After successful signup, navigate back to Login screen
    navigation.navigate('Login');
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://example.com/your-background-image.jpg' }} // Use the same background image or a different one
      style={styles.background}
    >
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
        <Text style={styles.title}>Create an Account</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#0056b3" style={styles.icon} />
          <TextInput 
            placeholder="Email" 
            style={styles.input} 
            autoCapitalize="none" 
            placeholderTextColor="#A0A0A0"
            value={email}
            onChangeText={setEmail}
            accessibilityLabel="Email Input"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#0056b3" style={styles.icon} />
          <TextInput 
            placeholder="Password" 
            style={styles.input} 
            secureTextEntry 
            placeholderTextColor="#A0A0A0"
            value={password}
            onChangeText={setPassword}
            accessibilityLabel="Password Input"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#0056b3" style={styles.icon} />
          <TextInput 
            placeholder="Confirm Password" 
            style={styles.input} 
            secureTextEntry 
            placeholderTextColor="#A0A0A0"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            accessibilityLabel="Confirm Password Input"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Already have an account? Log In</Text>
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
    backgroundColor: 'rgba(242, 242, 242, 0.9)', 
    borderRadius: 15,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
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
