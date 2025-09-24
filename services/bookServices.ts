import api from './apiClient';

const LIMIT = 10;

export interface TrendingBooks {
  works: { cover_i?: number; key: string; title: string }[];
}

export const getTrendingBooks = async (): Promise<TrendingBooks> => {
  try {
    const response = await api.get(`/trending/now.json?limit=${LIMIT}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export interface NewBook {
  id: string;
  changes: [
    {
      key: `/books/${string}`;
      revision: number;
    },
  ];
}

export const getAddedBooks = async (): Promise<NewBook[]> => {
  try {
    const response = await api.get(`/recentchanges/add-book.json?limit=${LIMIT}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export interface Books {
  [key: `olid:${string}`]: {
    records: {
      [key: `/books/${string}`]: {
        data: {
          title: string;
          cover?: {
            large: string;
          };
        };
      };
    };
  };
}

export const getBooks = async (booksUri: string): Promise<Books> => {
  try {
    const response = await api.get(`/api/volumes/brief/json/${booksUri}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};
