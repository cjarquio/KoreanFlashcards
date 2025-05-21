import React, { useEffect, useState } from 'react';
import { Button, View, StyleSheet, SafeAreaView } from 'react-native';
import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import outputs from './amplify_outputs.json';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "./amplify/data/resource";

Amplify.configure(outputs);

const SignOutButton = () => {
  const { signOut } = useAuthenticator();
  
  return (
    <View style={styles.signOutButton}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

// Amplify 6 has Authenticator that incompatible with current version of Expo Go.
// Would need to run app in Android Emulator or iOS Simulator.
const App = () => {
  const [things, setThings] = useState<any>();
  const client = generateClient<Schema>()

  useEffect (() => {
    const fetchData = async () => {
      try {
        const { data: translations, errors } = await client.models.koreanenglish.list()
        if(errors) {
          console.error('Error fetching data:', errors);
        }
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
    <Authenticator.Provider>
      <Authenticator>
        <SafeAreaView style={styles.container}>
          <SignOutButton />
        </SafeAreaView>
      </Authenticator>
    </Authenticator.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  signOutButton: {
    alignSelf: "flex-end",
  },
});

export default App;
