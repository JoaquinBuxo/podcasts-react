import { useEffect, useState } from 'react';
import { fetchPodcasts } from '../services/podcasts';
import { Podcast } from '../types/podcasts';

const PodcastsList = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  const getPodcasts = async () => {
    const podcasts = await fetchPodcasts();
    setPodcasts(podcasts);
  };

  useEffect(() => {
    getPodcasts();
  }, []);

  return (
    <>
      <h1>Podcasts</h1>
      {podcasts.map((podcast: Podcast) => (
        <div key={podcast.id.attributes['im:id']}>{podcast.title.label}</div>
      ))}
    </>
  );
};

export default PodcastsList;
