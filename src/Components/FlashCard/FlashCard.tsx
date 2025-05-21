import { Card, SizableText, YStack } from 'tamagui';
import { StyleSheet } from 'react-native';

interface FlashCardProps {
  koreanPhonetic: string | null | undefined;
  english: string | null | undefined;
}

export const FlashCard: React.FC<FlashCardProps> = (props: FlashCardProps) => {
  const { koreanPhonetic, english } = props;
  return (
    <Card style={styles.flashCard}>
      <YStack>
        <SizableText fontSize="$12">{koreanPhonetic}</SizableText>
        <SizableText fontSize="$12">{english}</SizableText>
      </YStack>
    </Card>
  );
};

const styles = StyleSheet.create({
  flashCard: {
    width: 200,
    height: 200,
  },
});

export default FlashCard;
