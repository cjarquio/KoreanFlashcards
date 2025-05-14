import React, { useEffect, useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import outputs from './amplify_outputs.json';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "./amplify/data/resource";

Amplify.configure(outputs);
const client = generateClient<Schema>()

const SignOutButton = () => {
  const [things, setThings] = useState<any>();
  const { signOut } = useAuthenticator();
  useEffect (() => {
    const fetchData = async () => {
      try {
        const { data: translations } = await client.models.koreanenglish.list()
        setThings(translations)
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  },[])
  console.log(things)
  return (
    <View style={styles.signOutButton}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

// Amplify 6 has Authenticator that incompatible with current version of Expo Go.
// Would need to run app in Android Emulator or iOS Simulator.
const App = () => {
  

  return (
    <Authenticator.Provider>
      <Authenticator>
        
        <SignOutButton />
      </Authenticator>
    </Authenticator.Provider>
  );
};

const styles = StyleSheet.create({
  signOutButton: {
    alignSelf: 'flex-end',
  },
});

export default App;
