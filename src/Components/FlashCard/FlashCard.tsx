import { Card, Text, YStack } from 'tamagui';
import { StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

interface FlashCardProps {
  koreanPhonetic: string | null | undefined;
  english: string | null | undefined;
  isKoreanPhonetic: boolean;
  handleHorizontalSwipe: (direction: 'leftSwipe' | 'rightSwipe') => void;
  handleVerticalSwipe: (direction: 'upSwipe' | 'downSwipe') => void;
}

export const FlashCard: React.FC<FlashCardProps> = (props: FlashCardProps) => {
  const {
    koreanPhonetic,
    isKoreanPhonetic,
    english,
    handleHorizontalSwipe,
    handleVerticalSwipe,
  } = props;

  const panGesture = Gesture.Pan().onEnd((e) => {
    if (e.velocityX > 50 && e.translationY < 50 && e.translationY > -50) {
      runOnJS(handleHorizontalSwipe)('rightSwipe');
    } else if (
      e.velocityX < -50 &&
      e.translationY < 50 &&
      e.translationY > -50
    ) {
      runOnJS(handleHorizontalSwipe)('leftSwipe');
    }

    if (e.velocityY > 50 && e.translationX < 50 && e.translationX > -50) {
      runOnJS(handleVerticalSwipe)('downSwipe');
    } else if (
      e.velocityY < -50 &&
      e.translationX < 50 &&
      e.translationX > -50
    ) {
      runOnJS(handleVerticalSwipe)('upSwipe');
    }
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Card style={styles.flashCard}>
        <YStack style={styles.flashCardTextContainer}>
          <Text fontSize="$12" adjustsFontSizeToFit>
            {isKoreanPhonetic ? koreanPhonetic : english}
          </Text>
        </YStack>
      </Card>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  flashCard: {
    width: '80%',
    height: '80%',
  },
  flashCardTextContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default FlashCard;
