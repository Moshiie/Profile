import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen({ navigation }) {
  const handleSignUp = () => {
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
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#0056b3" style={styles.icon} />
          <TextInput 
            placeholder="Password" 
            style={styles.input} 
            secureTextEntry 
            placeholderTextColor="#A0A0A0"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#0056b3" style={styles.icon} />
          <TextInput 
            placeholder="Confirm Password" 
            style={styles.input} 
            secureTextEntry 
            placeholderTextColor="#A0A0A0"
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: '#0056b3', // Blue border color
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
    backgroundColor: '#0056b3', // Blue for button
    borderRadius: 10, 
    width: '100%',
    height: 60, // Increase the height of the button
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
    fontSize: 20, // Increase the font size of the button text
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#0056b3', // Blue for link text
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
