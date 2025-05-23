import { Card, Text, YStack } from 'tamagui';
import { StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

interface FlashCardProps {
  koreanPhonetic: string | null | undefined;
  english: string | null | undefined;
  handleSwipe: (direction: 'leftSwipe' | 'rightSwipe') => void;
}

export const FlashCard: React.FC<FlashCardProps> = (props: FlashCardProps) => {
  const { koreanPhonetic, english, handleSwipe } = props;

  const panGesture = Gesture.Pan().onEnd((e) => {
    if (e.velocityX > 50) {
      runOnJS(handleSwipe)('rightSwipe');
    } else if (e.velocityX < -50) {
      runOnJS(handleSwipe)('leftSwipe');
    }
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Card style={styles.flashCard}>
        <YStack style={styles.flashCardTextContainer}>
          <Text fontSize="$12" adjustsFontSizeToFit>
            {koreanPhonetic}
          </Text>
          <Text fontSize="$12" adjustsFontSizeToFit>
            {english}
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
