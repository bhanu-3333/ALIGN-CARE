import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

const roles = [
  {
    id: 'admin',
    name: 'Admin',
    description: 'Manage Zone & Operations',
    image: require('@/assets/images/admin.png'),
  },
  {
    id: 'clinic',
    name: 'Clinic',
    description: 'Schedule waste pickups & track status',
    image: require('@/assets/images/clinic.png'),
  },
  {
    id: 'aligner',
    name: 'Aligner Company',
    description: 'Monitor compliance and generate reports',
    image: require('@/assets/images/aligner-company.png'),
  },
  {
    id: 'delivery',
    name: 'Delivery',
    description: 'Collect and transport waste efficiently',
    image: require('@/assets/images/delivery.png'),
  },
  {
    id: 'recycling',
    name: 'Recycling',
    description: 'Process waste and issue certifications',
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
        <View style={styles.header}>
          <Text style={styles.title}>Select Your Role</Text>
          <Text style={styles.subtitle}>Choose how you'll contribute to sustainability today</Text>
        </View>

        <View style={styles.cardsContainer}>
          {/* Admin - Full Width */}
          <TouchableOpacity
            style={[
              styles.card,
              styles.cardFull,
              selectedRole === roles[0].id && styles.cardSelected,
            ]}
            onPress={() => handleRoleSelect(roles[0].id)}
            activeOpacity={0.8}
          >
            <View style={[
              styles.iconCircle,
              selectedRole === roles[0].id && styles.iconCircleSelected,
            ]}>
              <Image
                source={roles[0].image}
                style={styles.roleIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={[
                styles.roleName,
                selectedRole === roles[0].id && styles.roleNameSelected,
              ]}>
                {roles[0].name}
              </Text>
              <Text style={[
                styles.roleDescription,
                selectedRole === roles[0].id && styles.roleDescriptionSelected,
              ]}>
                {roles[0].description}
              </Text>
            </View>
            <Text style={[
              styles.arrow,
              selectedRole === roles[0].id && styles.arrowSelected,
            ]}>›</Text>
          </TouchableOpacity>

          {/* Row 1: Clinic and Aligner Company */}
          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.card,
                styles.cardHalf,
                selectedRole === roles[1].id && styles.cardSelected,
              ]}
              onPress={() => handleRoleSelect(roles[1].id)}
              activeOpacity={0.8}
            >
              <View style={[
                styles.iconCircle,
                selectedRole === roles[1].id && styles.iconCircleSelected,
              ]}>
                <Image
                  source={roles[1].image}
                  style={styles.roleIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={[
                styles.roleName,
                selectedRole === roles[1].id && styles.roleNameSelected,
              ]}>
                {roles[1].name}
              </Text>
              <Text style={[
                styles.roleDescription,
                selectedRole === roles[1].id && styles.roleDescriptionSelected,
              ]}>
                {roles[1].description}
              </Text>
              <Text style={[
                styles.arrow,
                selectedRole === roles[1].id && styles.arrowSelected,
              ]}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.card,
                styles.cardHalf,
                selectedRole === roles[2].id && styles.cardSelected,
              ]}
              onPress={() => handleRoleSelect(roles[2].id)}
              activeOpacity={0.8}
            >
              <View style={[
                styles.iconCircle,
                selectedRole === roles[2].id && styles.iconCircleSelected,
              ]}>
                <Image
                  source={roles[2].image}
                  style={styles.roleIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={[
                styles.roleName,
                selectedRole === roles[2].id && styles.roleNameSelected,
              ]}>
                {roles[2].name}
              </Text>
              <Text style={[
                styles.roleDescription,
                selectedRole === roles[2].id && styles.roleDescriptionSelected,
              ]}>
                {roles[2].description}
              </Text>
              <Text style={[
                styles.arrow,
                selectedRole === roles[2].id && styles.arrowSelected,
              ]}>›</Text>
            </TouchableOpacity>
          </View>

          {/* Row 2: Delivery and Recycling */}
          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.card,
                styles.cardHalf,
                selectedRole === roles[3].id && styles.cardSelected,
              ]}
              onPress={() => handleRoleSelect(roles[3].id)}
              activeOpacity={0.8}
            >
              <View style={[
                styles.iconCircle,
                selectedRole === roles[3].id && styles.iconCircleSelected,
              ]}>
                <Image
                  source={roles[3].image}
                  style={styles.roleIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={[
                styles.roleName,
                selectedRole === roles[3].id && styles.roleNameSelected,
              ]}>
                {roles[3].name}
              </Text>
              <Text style={[
                styles.roleDescription,
                selectedRole === roles[3].id && styles.roleDescriptionSelected,
              ]}>
                {roles[3].description}
              </Text>
              <Text style={[
                styles.arrow,
                selectedRole === roles[3].id && styles.arrowSelected,
              ]}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.card,
                styles.cardHalf,
                selectedRole === roles[4].id && styles.cardSelected,
              ]}
              onPress={() => handleRoleSelect(roles[4].id)}
              activeOpacity={0.8}
            >
              <View style={[
                styles.iconCircle,
                selectedRole === roles[4].id && styles.iconCircleSelected,
              ]}>
                <Image
                  source={roles[4].image}
                  style={styles.roleIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={[
                styles.roleName,
                selectedRole === roles[4].id && styles.roleNameSelected,
              ]}>
                {roles[4].name}
              </Text>
              <Text style={[
                styles.roleDescription,
                selectedRole === roles[4].id && styles.roleDescriptionSelected,
              ]}>
                {roles[4].description}
              </Text>
              <Text style={[
                styles.arrow,
                selectedRole === roles[4].id && styles.arrowSelected,
              ]}>›</Text>
            </TouchableOpacity>
          </View>
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
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 10,
    fontFamily: 'Lato',
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    fontFamily: 'Lato',
  },
  cardsContainer: {
    flex: 1,
    gap: 18,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    position: 'relative',
    minHeight: 140,
  },
  cardFull: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    minHeight: 120,
  },
  cardHalf: {
    flex: 1,
    alignItems: 'flex-start',
    minHeight: 180,
  },
  cardSelected: {
    backgroundColor: '#0D9488',
    borderColor: '#0D9488',
  },
  cardContent: {
    flex: 1,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#0D9488',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  iconCircleSelected: {
    backgroundColor: '#0F766E',
  },
  roleIcon: {
    width: 32,
    height: 32,
    tintColor: '#fff',
  },
  roleName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    fontFamily: 'Lato',
  },
  roleNameSelected: {
    color: '#fff',
  },
  roleDescription: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
    fontFamily: 'Lato',
  },
  roleDescriptionSelected: {
    color: '#E0F2F1',
  },
  arrow: {
    position: 'absolute',
    right: 20,
    top: '50%',
    fontSize: 28,
    color: '#D1D5DB',
    marginTop: -14,
  },
  arrowSelected: {
    color: '#fff',
  },
});
