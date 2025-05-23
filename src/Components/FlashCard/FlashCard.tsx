import { Card, Text, YStack } from 'tamagui';
import { StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

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
  const position = useSharedValue(0);
  const scale = useSharedValue(1);
  const END_POSITION = 0;
  const minVelocity = 0;
  const minTranslation = 80;

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      if (
        e.velocityX < -minVelocity &&
        e.translationY < minTranslation &&
        e.translationY > -minTranslation
      ) {
        position.value = e.translationX;
        scale.value = scale.value > 0 ? 1 + e.translationX / 100 : 0;
      } else if (
        e.velocityX > minVelocity &&
        e.translationY < minTranslation &&
        e.translationY > -minTranslation
      ) {
        position.value = END_POSITION + e.translationX;
        scale.value = scale.value > 0 ? 1 - e.translationX / 100 : 0;
      }
    })
    .onEnd((e) => {
      if (
        e.velocityX > minVelocity &&
        e.translationY < minTranslation &&
        e.translationY > -minTranslation
      ) {
        runOnJS(handleHorizontalSwipe)('rightSwipe');
        position.value = withTiming(END_POSITION, { duration: 100 });
        scale.value = 1;
      } else if (
        e.velocityX < -minVelocity &&
        e.translationY < minTranslation &&
        e.translationY > -minTranslation
      ) {
        position.value = withTiming(END_POSITION, { duration: 100 });
        scale.value = 1;
        runOnJS(handleHorizontalSwipe)('leftSwipe');
      }

      if (
        e.velocityY > minVelocity &&
        e.translationX < minTranslation &&
        e.translationX > -minTranslation
      ) {
        runOnJS(handleVerticalSwipe)('downSwipe');
      } else if (
        e.velocityY < -minVelocity &&
        e.translationX < minTranslation &&
        e.translationX > -minTranslation
      ) {
        runOnJS(handleVerticalSwipe)('upSwipe');
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }, { scale: scale.value }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.flashCard, animatedStyle]}>
        <Card style={styles.flashCardTextContainer}>
          <Text fontSize="$12" adjustsFontSizeToFit>
            {isKoreanPhonetic ? koreanPhonetic : english}
          </Text>
        </Card>
      </Animated.View>
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
