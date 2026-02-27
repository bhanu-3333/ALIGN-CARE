import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

const roles = [
  {
    id: 'admin',
    name: 'Admin',
    description: 'Manage Users & Operations',
    image: require('@/assets/images/admin.png'),
  },
  {
    id: 'clinic',
    name: 'Clinic',
    description: 'Schedule appointments & track orders',
    image: require('@/assets/images/clinic.png'),
  },
  {
    id: 'aligner',
    name: 'Aligner Company',
    description: 'Manage inventory and orders in system',
    image: require('@/assets/images/aligner-company.png'),
  },
  {
    id: 'delivery',
    name: 'Delivery Partner',
    description: 'Collect and transport used Orthodontics',
    image: require('@/assets/images/delivery.png'),
  },
  {
    id: 'recycling',
    name: 'Recycler Company',
    description: 'Process and recycle to our refinery plant',
    image: require('@/assets/images/recycling.png'),
  },
];

export default function SelectRoleScreen() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    console.log('Selected role:', roleId);
    
    // Navigate to login with selected role
    setTimeout(() => {
      router.push({
        pathname: '/login',
        params: { role: roleId },
      });
    }, 300);
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>Select Your Role</Text>
          <Text style={styles.subtitle}>Choose how you want to continue</Text>
        </View>

        <View style={styles.grid}>
          {roles.map((role, index) => (
            <TouchableOpacity
              key={role.id}
              style={[
                styles.card,
                selectedRole === role.id && styles.cardSelected,
                index === 2 && styles.cardLarge,
              ]}
              onPress={() => handleRoleSelect(role.id)}
              activeOpacity={0.7}
            >
              <Image
                source={role.image}
                style={styles.roleIcon}
                resizeMode="contain"
              />
              <Text style={[
                styles.roleName,
                selectedRole === role.id && styles.roleNameSelected,
              ]}>
                {role.name}
              </Text>
              <Text style={[
                styles.roleDescription,
                selectedRole === role.id && styles.roleDescriptionSelected,
              ]}>
                {role.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 35,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2E7D6B',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  card: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 160,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  cardLarge: {
    width: '100%',
  },
  cardSelected: {
    backgroundColor: '#2E7D6B',
    borderColor: '#2E7D6B',
    transform: [{ scale: 0.98 }],
  },
  roleIcon: {
    width: 60,
    height: 60,
    marginBottom: 12,
  },
  roleName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    textAlign: 'center',
  },
  roleNameSelected: {
    color: '#fff',
  },
  roleDescription: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
  roleDescriptionSelected: {
    color: '#E8F5F3',
  },
});
