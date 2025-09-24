import { View } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import { useCustomSize } from '~/hooks/useCustomSize';
import { LoadingBook } from './LoadingBook';

export const TrendingBookListSkeleton = () => {
  const { windowWidth, height, width } = useCustomSize('large');

  return (
    <ReanimatedCarousel
      width={windowWidth}
      height={height}
      autoPlayInterval={2000}
      data={[1]}
      loop={true}
      pagingEnabled={true}
      snapEnabled={true}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 1,
        parallaxAdjacentItemScale: 0.9,
        parallaxScrollingOffset: windowWidth * 0.4,
      }}
      renderItem={(item) => (
        <View className="flex h-full items-center">
          <LoadingBook width={width} />
        </View>
      )}
    />
  );
};
