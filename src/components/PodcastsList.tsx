import { useEffect, useState } from 'react';
import { fetchPodcasts } from '../services/podcasts';
import { Podcast } from '../types/podcasts';
import PodcastCard from './PodcastCard';

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
        <PodcastCard key={podcast.id.attributes['im:id']} podcast={podcast} />
      ))}
    </>
  );
};

export default PodcastsList;
