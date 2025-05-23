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
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
  const [taekwondoTranslations, setTaekwondoTranslations] = useState<TaekwondoTranslationsProps[]>([]);
  const [index, setIndex] = useState(0);
  const [isKoreanPhoneticVisible, setIsKoreanPhoneticVisible] = useState(true);
  const client = generateClient<Schema>()

  const handleHorizontalSwipe = (direction: 'leftSwipe' | 'rightSwipe') => {
    if (direction === 'leftSwipe') { 
      setIndex((prevIndex) => (prevIndex + 1) % taekwondoTranslations.length);
    } else if (direction === 'rightSwipe') {
      setIndex((prevIndex) => (prevIndex - 1 + taekwondoTranslations.length) % taekwondoTranslations.length);
    }
    setIsKoreanPhoneticVisible(true);
  }

  const handleVerticalSwipe = (direction: 'upSwipe' | 'downSwipe') => {
    setIsKoreanPhoneticVisible((prev) => !prev);
  }  

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

  return (
    <Authenticator.Provider>
      <Authenticator>
        <TamaguiProvider config={config}>
          <SafeAreaView style={styles.container}>
            <GestureHandlerRootView style={styles.container}>
              <FlashCard
                koreanPhonetic={taekwondoTranslations?.[index]?.korean}
                english={taekwondoTranslations?.[index]?.english}
                isKoreanPhonetic={isKoreanPhoneticVisible}
                handleHorizontalSwipe={handleHorizontalSwipe}
                handleVerticalSwipe={handleVerticalSwipe}
              />
            </GestureHandlerRootView>
            <SignOutButton />
          </SafeAreaView>
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
