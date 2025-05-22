import { Card, Text, YStack } from 'tamagui';
import { StyleSheet } from 'react-native';

interface FlashCardProps {
  koreanPhonetic: string | null | undefined;
  english: string | null | undefined;
}

export const FlashCard: React.FC<FlashCardProps> = (props: FlashCardProps) => {
  const { koreanPhonetic, english } = props;
  return (
    <Card style={styles.flashCard}>
      <YStack style={styles.flashCardTextContainer}>
        <Text fontSize="$12">{koreanPhonetic}</Text>
        <Text fontSize="$12">{english}</Text>
      </YStack>
    </Card>
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
