import { Pressable, View } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import { BOOK_IMAGE_API_URL } from '~/constants';
import { TrendingBooks } from '~/services/bookServices';
import { useCustomSize } from '~/hooks/useCustomSize';
import { Link } from 'expo-router';
import { Book } from './Book';

interface Props {
  trendingBooks: TrendingBooks;
}

export const TrendingBookList = ({ trendingBooks }: Props) => {
  const { windowWidth, height, width } = useCustomSize('large');

  return (
    <ReanimatedCarousel
      width={windowWidth}
      height={height}
      autoPlayInterval={2000}
      data={trendingBooks.works}
      loop={true}
      pagingEnabled={true}
      snapEnabled={true}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 1,
        parallaxAdjacentItemScale: 0.9,
        parallaxScrollingOffset: windowWidth * 0.4,
      }}
      renderItem={({ item }) => {
        const imgSrc = item.cover_i ? `${BOOK_IMAGE_API_URL}/b/id/${item.cover_i}-L.jpg` : null;

        return (
          <View className="flex h-full items-center">
            <Link href={{ pathname: '/details', params: { title: item.title, imgSrc } }} asChild>
              <Pressable>
                <Book width={width} imgSrc={imgSrc} title={item.title} />
              </Pressable>
            </Link>
          </View>
        );
      }}
    />
  );
};
