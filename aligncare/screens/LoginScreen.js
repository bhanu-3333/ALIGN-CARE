import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { API_URL, ENDPOINTS } from '@/config/api';

export default function LoginScreen() {
  const { role } = useLocalSearchParams();
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      console.log('Sending login request:', {
        email: email.toLowerCase().trim(),
      });

      const response = await fetch(`${API_URL}${ENDPOINTS.LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          password,
        }),
      });

      const data = await response.json();
      console.log('Login response:', data);
      console.log('Response status:', response.status);

      if (response.ok) {
        const roleName = role ? role.charAt(0).toUpperCase() + role.slice(1) : 'User';
        Alert.alert(
          'Login Successful',
          `Welcome back! You're logged in as ${roleName}.`,
          [
            {
              text: 'Continue',
              onPress: () => {
                // Navigate based on role
                const roleRoutes = {
                  admin: '/admin-home',
                  clinic: '/clinic-home',
                  aligner: '/aligner-home',
                  delivery: '/delivery-home',
                  recycling: '/recycler-home',
                };

                const userRole = (data.role || '').toLowerCase();
                const route = roleRoutes[userRole] || '/(tabs)';
                console.log('Navigating to:', route, 'for role:', userRole);
                router.replace(route);
              },
            },
          ]
        );
      } else {
        // Show specific error messages
        if (data.message === 'Invalid email') {
          Alert.alert(
            'Email Not Found',
            'No account found with this email. Please check your email or sign up for a new account.',
            [
              { text: 'Try Again', style: 'cancel' },
              { 
                text: 'Sign Up', 
                onPress: () => router.push({ pathname: '/signup', params: { role } })
              }
            ]
          );
        } else if (data.message === 'Invalid password') {
          Alert.alert(
            'Incorrect Password',
            'The password you entered is incorrect. Please try again.',
            [{ text: 'Try Again' }]
          );
        } else {
          Alert.alert('Login Failed', data.message || 'Unable to login. Please try again.');
        }
      }
    } catch (error) {
      Alert.alert(
        'Connection Error',
        'Unable to connect to server. Please check:\n\n• Backend server is running\n• You are connected to the internet\n• Firewall is not blocking the connection',
        [{ text: 'OK' }]
      );
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = () => {
    router.push({
      pathname: '/signup',
      params: { role },
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>
            Login as {role ? role.charAt(0).toUpperCase() + role.slice(1) : 'User'}
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleSignup}>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#6B7280',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#1F2937',
  },
  button: {
    backgroundColor: '#0D9488',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#0D9488',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  signupText: {
    fontSize: 14,
    color: '#6B7280',
  },
  signupLink: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0D9488',
  },
});
