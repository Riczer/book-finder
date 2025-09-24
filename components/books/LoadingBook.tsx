import { ActivityIndicator, View } from 'react-native';

interface Props {
  width: number;
}

export const LoadingBook = ({ width }: Props) => {
  return (
    <View
      style={{ width }}
      className={`flex aspect-[25/36] items-center justify-center bg-gray-500 p-1`}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};
