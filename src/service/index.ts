import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getUniqueEntries } from '../helpers';

const GITHUB_API_BASE = 'https://api.github.com';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: GITHUB_API_BASE }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page: number) => `users?since=${page * 30}`,
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => endpointName,
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => (getUniqueEntries([...currentCache, ...newItems], 'login')),
      // Refetch when the page arg changes
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
    }),
    getUserDetails: builder.query({
      query: (username: string) => `users/${username}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserDetailsQuery } = githubApi;
