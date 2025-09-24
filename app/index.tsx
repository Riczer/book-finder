import { Stack } from 'expo-router';
import { TrendingBookList } from '~/components/books/TrendingBookList';
import { Container } from '~/components/Container';
import { BookList } from '~/components/books/BookList';
import { useQuery } from '@tanstack/react-query';
import { getAddedBooks, getBooks, getTrendingBooks } from '~/services/bookServices';
import { BookListSkeleton } from '~/components/books/BookListSkeleton';
import { TrendingBookListSkeleton } from '~/components/books/TrendingBookListSkeleton';
import { Platform, Text, View } from 'react-native';

const isWeb = Platform.OS === 'web';

export default function Home() {
  const { data: trendingBooks } = useQuery({
    queryKey: ['trendingBooks'],
    queryFn: getTrendingBooks,
    initialData: {
      works: [],
    },
  });

  const { data: addedBooks } = useQuery({
    queryKey: ['addedBooks'],
    queryFn: getAddedBooks,
    initialData: [],
  });

  const olids = addedBooks.map((book) => {
    const { key } = book.changes.at(-1)!;
    const parts = key.split('/');
    return parts[2];
  });

  const { data: newBooks } = useQuery({
    queryKey: ['newBooks'],
    queryFn: () => {
      const formattedOlids = olids.map((olid) => `olid:${olid}`).join('|');
      return getBooks(formattedOlids);
    },
    initialData: {},
    enabled: addedBooks.length > 0,
  });

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Books',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      />
      <Container>
        <View className="container">
          <Text className="text-2xl text-white">Trending</Text>
        </View>
        <View className={`${isWeb ? 'container' : ''}`}>
          {trendingBooks.works.length === 0 ? (
            <TrendingBookListSkeleton />
          ) : (
            <TrendingBookList trendingBooks={trendingBooks} />
          )}
        </View>
        {!isWeb && (
          <>
            <View className="container">
              <Text className="text-2xl text-white">New Releases</Text>
            </View>
            <View className="container">
              {Object.keys(newBooks).length === 0 ? (
                <BookListSkeleton />
              ) : (
                <BookList newBooks={newBooks} olids={olids} />
              )}
            </View>
          </>
        )}
      </Container>
    </>
  );
}
