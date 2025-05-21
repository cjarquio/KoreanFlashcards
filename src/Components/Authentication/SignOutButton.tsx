import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { View, Button, StyleSheet } from 'react-native';

export const SignOutButton = () => {
  const { signOut } = useAuthenticator();

  return (
    <View style={styles.signOutButton}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  signOutButton: {
    alignSelf: 'center',
  },
});

export default SignOutButton;
