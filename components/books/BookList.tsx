import { Pressable, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Books } from '~/services/bookServices';
import { useCustomSize } from '~/hooks/useCustomSize';
import { Link } from 'expo-router';
import { Book } from './Book';

interface Props {
  newBooks: Books;
  olids: string[];
}

export const BookList = ({ newBooks, olids }: Props) => {
  const { width } = useCustomSize('small');

  return (
    <FlashList
      data={olids}
      horizontal
      ItemSeparatorComponent={() => <View className="mx-2" />}
      renderItem={({ item }) => {
        const { data } = newBooks[`olid:${item}`].records[`/books/${item}`];
        return (
          <Link
            href={{
              pathname: '/details',
              params: {
                title: data.title,
                imgSrc: data.cover?.large,
              },
            }}
            asChild>
            <Pressable>
              <Book width={width} imgSrc={data.cover?.large} title={data.title} />
            </Pressable>
          </Link>
        );
      }}
      keyExtractor={(item) => item}
    />
  );
};
