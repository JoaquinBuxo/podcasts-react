import { Podcasts } from '../types/podcasts';

export const filterPodcasts = (podcasts: Podcasts, searchQuery: string) => {
  if (searchQuery.length === 0) return podcasts;
  const query = searchQuery.toLowerCase();

  return podcasts.filter(
    (podcast) =>
      podcast.title.label.toLowerCase().includes(query) ||
      podcast['im:artist'].label.toLowerCase().includes(query)
  );
};
