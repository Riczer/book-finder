import { Image } from 'expo-image';
import { View } from 'react-native';
import { NoCoverBook } from './NoCoverBook';

interface Props {
  width: number;
  imgSrc?: string | null;
  title: string;
}

export const Book = ({ width, imgSrc, title }: Props) => {
  return (
    <View style={{ width }} className="aspect-[25/36]">
      {imgSrc ? (
        <Image
          source={imgSrc}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      ) : (
        <NoCoverBook width={width} title={title} />
      )}
    </View>
  );
};
