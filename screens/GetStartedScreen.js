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
      <View style={styles.content}>
        <Image
          source={require('@/assets/images/teeth.png')}
          style={styles.teethImage}
          resizeMode="contain"
        />
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>Align Care</Text>
          <Text style={styles.subtitle}>
            Because Every Smile{'\n'}Deserves a Cleaner Planet
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={handleGetStarted}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  teethImage: {
    width: 300,
    height: 300,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2E7D6B',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#2E7D6B',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: '#2E7D6B',
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
  },
});
