import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function GetStartedScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    console.log('Navigate to Role Page');
    router.push('/select-role');
  };

  return (
    <View style={styles.container}>
      {/* Top Section with Background Image */}
      <View style={styles.topSection}>
        <Image
          source={require('@/assets/images/background.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <Image
          source={require('@/assets/images/teeth.png')}
          style={styles.teethImage}
          resizeMode="contain"
        />
      </View>

      {/* Bottom Section - White Background */}
      <View style={styles.bottomSection}>
        <View style={styles.content}>
          {/* Logo Image */}
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Because Every Smile{'\n'}Deserves a Cleaner Planet
          </Text>

          {/* Get Started Button */}
          <TouchableOpacity 
            style={styles.button}
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 1.2,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingTop: 40,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  teethImage: {
    width: '100%',
    height: '90%',
    maxWidth: 600,
    zIndex: 10,
    marginTop: 20,
    marginBottom: -80,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 40,
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 180,
    height: 80,
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    fontFamily: 'Lato',
  },
  button: {
    backgroundColor: '#0D9488',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: '#0D9488',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Lato',
  },
});
