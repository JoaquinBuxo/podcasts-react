import { LoaderFunctionArgs } from 'react-router-dom';
import { PodcastDetailResult } from '../types/podcasts';

export const fetchPodcasts = async () => {
  try {
    const response = await fetch(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=10/genre=1310/json'
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.feed.entry;
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error}`);
  }
};

export const podcastDetailsLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<PodcastDetailResult> => {
  const { podcastId } = params;
  const res = await fetch(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`
  );
  return res.json();
};
