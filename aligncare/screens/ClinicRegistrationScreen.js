import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { API_URL, ENDPOINTS } from '../config/api';

export default function ClinicRegistrationScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    tndcRegistrationNo: '',
    ownerName: '',
    building: '',
    area: '',
    pinCode: '',
    state: '',
    clinicType: '',
    alignerCompany: '',
  });

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!formData.tndcRegistrationNo || !formData.ownerName || !formData.pinCode) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        tndcRegistrationNo: formData.tndcRegistrationNo,
        ownerName: formData.ownerName,
        clinicAddress: {
          building: formData.building,
          area: formData.area,
          pinCode: formData.pinCode,
          state: formData.state,
        },
        clinicType: formData.clinicType,
        alignerCompany: formData.alignerCompany,
      };

      const response = await fetch(`${API_URL}${ENDPOINTS.CLINIC_REGISTER}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Clinic registered successfully!');
        router.replace('/ClinicHomeScreen');
      } else {
        Alert.alert('Registration Failed', data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#374151" />
          </TouchableOpacity>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '50%' }]} />
            </View>
          </View>
          <Text style={styles.stepText}>STEP 1/2</Text>
        </View>

        <Text style={styles.title}>Clinic Registration</Text>
        <Text style={styles.description}>
          Register your clinic to seamlessly manage aligner waste pickup and recycling. Join our sustainable dental network.
        </Text>

        <View style={styles.form}>
          {/* TNDC Registration No */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Ionicons name="business-outline" size={18} color="#0D9488" />
              <Text style={styles.label}>TNDC Registration No</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter TNDC Number"
              placeholderTextColor="#9CA3AF"
              value={formData.tndcRegistrationNo}
              onChangeText={(text) => setFormData({ ...formData, tndcRegistrationNo: text })}
            />
          </View>

          {/* Owner Name */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Ionicons name="person-outline" size={18} color="#0D9488" />
              <Text style={styles.label}>Owner Name</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Eg: Dr. Akash"
              placeholderTextColor="#9CA3AF"
              value={formData.ownerName}
              onChangeText={(text) => setFormData({ ...formData, ownerName: text })}
            />
          </View>

          {/* Clinic Address */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Ionicons name="location-outline" size={18} color="#0D9488" />
              <Text style={styles.label}>Clinic Address</Text>
            </View>
            <View style={styles.addressGrid}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Building No / Street"
                placeholderTextColor="#9CA3AF"
                value={formData.building}
                onChangeText={(text) => setFormData({ ...formData, building: text })}
              />
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="PIN Code"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
                value={formData.pinCode}
                onChangeText={(text) => setFormData({ ...formData, pinCode: text })}
              />
            </View>
            <View style={styles.addressGrid}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Area"
                placeholderTextColor="#9CA3AF"
                value={formData.area}
                onChangeText={(text) => setFormData({ ...formData, area: text })}
              />
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="State"
                placeholderTextColor="#9CA3AF"
                value={formData.state}
                onChangeText={(text) => setFormData({ ...formData, state: text })}
              />
            </View>
          </View>

          {/* Clinic Type */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Ionicons name="medical-outline" size={18} color="#0D9488" />
              <Text style={styles.label}>Clinic Type</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Select Clinic Type"
              placeholderTextColor="#9CA3AF"
              value={formData.clinicType}
              onChangeText={(text) => setFormData({ ...formData, clinicType: text })}
            />
          </View>

          {/* Aligner Company */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Ionicons name="business-outline" size={18} color="#0D9488" />
              <Text style={styles.label}>Aligner Company</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Select Partner Company"
              placeholderTextColor="#9CA3AF"
              value={formData.alignerCompany}
              onChangeText={(text) => setFormData({ ...formData, alignerCompany: text })}
            />
          </View>

          <TouchableOpacity
            style={[styles.registerButton, loading && styles.disabledButton]}
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={styles.registerButtonText}>
              {loading ? 'Registering...' : 'Register Company'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    padding: 24,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  progressContainer: {
    flex: 1,
    height: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 3,
    marginRight: 12,
  },
  progressBar: {
    flex: 1,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0D9488',
    borderRadius: 3,
  },
  stepText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    width: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 22,
    marginBottom: 32,
  },
  form: {
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#111827',
    backgroundColor: '#F9FAFB',
  },
  addressGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 4,
  },
  halfInput: {
    flex: 1,
  },
  registerButton: {
    backgroundColor: '#0D9488',
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    shadowColor: '#0D9488',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  disabledButton: {
    opacity: 0.7,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
