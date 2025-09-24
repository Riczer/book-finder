import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useCustomSize } from '~/hooks/useCustomSize';
import { LoadingBook } from './LoadingBook';

export const BookListSkeleton = () => {
  const { width } = useCustomSize('small');

  return (
    <FlashList
      data={[1, 2, 3, 4]}
      horizontal
      ItemSeparatorComponent={() => <View className="mx-2" />}
      renderItem={(item) => {
        return <LoadingBook width={width} />;
      }}
      keyExtractor={(item) => item.toString()}
    />
  );
};
