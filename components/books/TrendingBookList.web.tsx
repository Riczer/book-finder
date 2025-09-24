import { Pressable, View } from 'react-native';
import { BOOK_IMAGE_API_URL } from '~/constants';
import { TrendingBooks } from '~/services/bookServices';
import { useCustomSize } from '~/hooks/useCustomSize';
import { Link } from 'expo-router';
import { Book } from './Book';
import { FlashList } from '@shopify/flash-list';

interface Props {
  trendingBooks: TrendingBooks;
}

export const TrendingBookList = ({ trendingBooks }: Props) => {
  const { width } = useCustomSize('small');

  return (
    <FlashList
      data={trendingBooks.works}
      horizontal
      ItemSeparatorComponent={() => <View className="mx-2" />}
      renderItem={({ item }) => {
        const imgSrc = item.cover_i ? `${BOOK_IMAGE_API_URL}/b/id/${item.cover_i}-L.jpg` : null;

        return (
          <Link
            href={{
              pathname: '/details',
              params: {
                title: item.title,
                imgSrc,
              },
            }}
            asChild>
            <Pressable>
              <Book width={width} imgSrc={imgSrc} title={item.title} />
            </Pressable>
          </Link>
        );
      }}
      keyExtractor={(item) => item.key}
    />
  );
};
