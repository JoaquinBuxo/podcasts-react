import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  Episode,
  Podcast,
  PodcastDetail,
  PodcastDetailResult,
} from '../types/podcasts';

export const podcastsApi = createApi({
  reducerPath: 'podcastsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://itunes.apple.com' }),
  endpoints: (builder) => ({
    getAllPodcasts: builder.query<Podcast[], void>({
      query: () => '/us/rss/toppodcasts/limit=10/genre=1310/json',
      transformResponse: (response: { feed: { entry: Podcast[] } }) =>
        response.feed.entry,
    }),
    getPodcastDetails: builder.query<
      { podcast: PodcastDetail; episodes: Episode[] },
      string | undefined
    >({
      query: (podcastId) =>
        `/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`,
      transformResponse: (
        response: PodcastDetailResult
      ): { podcast: PodcastDetail; episodes: Episode[] } => {
        const { results } = response;
        const [podcast, ...episodes] = results;
        return { podcast, episodes };
      },
    }),
  }),
});

export const { useGetAllPodcastsQuery, useGetPodcastDetailsQuery } =
  podcastsApi;
