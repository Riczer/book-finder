import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';

export const Container = ({ children }: { children: React.ReactNode }) => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      className="flex flex-1 gap-4"
      style={{ marginTop: headerHeight }}>
      {children}
    </SafeAreaView>
  );
};
