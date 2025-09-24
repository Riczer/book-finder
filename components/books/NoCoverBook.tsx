import { Text, View } from 'react-native';

interface Props {
  width: number;
  title: string;
}

export const NoCoverBook = ({ width, title }: Props) => {
  return (
    <View
      style={{ width }}
      className="flex aspect-[25/36] items-center justify-center bg-gray-500 p-1">
      <Text className="text-center text-white">{title}</Text>
    </View>
  );
};
