import '../global.css';

import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

export default function Layout() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerTransparent: true,
          contentStyle: {
            backgroundColor: '#262626',
          },
        }}
      />
    </QueryClientProvider>
  );
}
