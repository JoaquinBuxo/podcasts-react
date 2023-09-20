import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Podcast } from '../types/podcasts';

export const podcastsApi = createApi({
  reducerPath: 'podcastsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://itunes.apple.com' }),
  endpoints: (builder) => ({
    getAllPodcasts: builder.query<Podcast[], void>({
      query: () => '/us/rss/toppodcasts/limit=10/genre=1310/json',
      transformResponse: (response: { feed: { entry: Podcast[] } }) =>
        response.feed.entry,
    }),
  }),
});

export const { useGetAllPodcastsQuery } = podcastsApi;
