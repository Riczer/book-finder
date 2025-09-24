import { useWindowDimensions, Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

type Sizes = 'small' | 'large';

interface Measure {
  width: number;
  height: number;
}

const variants: Record<Sizes, Measure> = {
  small: { width: isWeb ? 0.1 : 0.4, height: 0 },
  large: { width: isWeb ? 0.2 : 0.6, height: 0.4 },
};

export const useCustomSize = (size: Sizes) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  return {
    windowWidth,
    windowHeight,
    width: windowWidth * variants[size].width,
    height: windowHeight * variants[size].height,
  };
};
