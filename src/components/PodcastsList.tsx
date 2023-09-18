import { useEffect, useState } from 'react';
import { fetchPodcasts } from '../services/podcasts';
import { Podcast } from '../types/podcasts';
import PodcastCard from './PodcastCard';
import Search from './Search';
import { filterPodcasts } from '../utils/podcastUtils';

const PodcastsList = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getPodcasts = async () => {
    const podcasts = await fetchPodcasts();
    setPodcasts(podcasts);
    setFilteredPodcasts(podcasts);
  };

  useEffect(() => {
    getPodcasts();
  }, []);

  useEffect(() => {
    setFilteredPodcasts(filterPodcasts(podcasts, searchQuery));
  }, [podcasts, searchQuery]);

  return (
    <>
      <h1>Podcasts</h1>
      <Search setSearchQuery={setSearchQuery} />
      {filteredPodcasts.map((podcast: Podcast) => (
        <PodcastCard key={podcast.id.attributes['im:id']} podcast={podcast} />
      ))}
    </>
  );
};

export default PodcastsList;
