import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { Book } from '~/components/books/Book';
import { Container } from '~/components/Container';
import { useCustomSize } from '~/hooks/useCustomSize';

export default function Details() {
  const { title, imgSrc } = useLocalSearchParams<{ title: string; imgSrc?: string }>();
  const { width } = useCustomSize('large');

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Details',
          headerTintColor: 'white',
        }}
      />
      <Container>
        <View className="container flex items-center gap-4 pt-4">
          <Book width={width} imgSrc={imgSrc} title={title} />
          <View className="gap-2">
            <Text className="text-center text-2xl font-bold text-white">Title</Text>
            <Text className="text-xl text-white">{title}</Text>
          </View>
        </View>
      </Container>
    </>
  );
}
