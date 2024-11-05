import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PasswordRecoveryScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendRecoveryEmail = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    setLoading(true);
    // Simulate an API call to send recovery email
    setTimeout(() => {
      setLoading(false);
      // Assuming the email is sent successfully for demonstration purposes
      Alert.alert('Success', 'A recovery email has been sent to your email address.');
      navigation.navigate('Login');
    }, 2000);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
      <Text style={styles.title}>Recover Password</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleSendRecoveryEmail} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Send Recovery Email</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
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
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: '#0056b3',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
