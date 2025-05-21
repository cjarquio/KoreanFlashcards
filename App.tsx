import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react-native';
import outputs from './amplify_outputs.json';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "./amplify/data/resource";
import { createTamagui,TamaguiProvider, View } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v4'
import SignOutButton from './src/Components/Authentication/SignOutButton';
import FlashCard from './src/Components/FlashCard/FlashCard';

const config = createTamagui(defaultConfig)
Amplify.configure(outputs);

interface TaekwondoTranslationsProps {
  id: number;
  korean: string | null;
  english: string | null;
  symbol: string | null;
}

// Amplify 6 has Authenticator that incompatible with current version of Expo Go.
// Would need to run app in Android Emulator or iOS Simulator.
const App = () => {
  const [taekwondoTranslations, setTaekwondoTranslations] = useState<TaekwondoTranslationsProps[]>();
  const client = generateClient<Schema>()

  useEffect (() => {
    const fetchData = async () => {
      try {
        const { data: translations, errors } = await client.models.koreanenglish.list()

        if(errors) {
          console.error('Error fetching data:', errors);
          return;
        }

        if (translations) {
          setTaekwondoTranslations(translations)
        }
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  },[])

  console.log('taekwondoTranslations', taekwondoTranslations)

  return (
    <Authenticator.Provider>
      <Authenticator>
        <TamaguiProvider config={config}>
          <View style={styles.container}>
            <FlashCard koreanPhonetic={taekwondoTranslations?.[0]?.korean} english={taekwondoTranslations?.[0]?.english} />
            <SignOutButton />
          </View>
        </TamaguiProvider>
      </Authenticator>
    </Authenticator.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
