import { useEffect, useState } from 'react';
import { Podcast, PodcastQueryResult } from '../types/podcasts';
import PodcastCard from './PodcastCard';
import Search from './Search';
import { filterPodcasts } from '../utils/podcastUtils';

import { useGetAllPodcastsQuery } from '../redux/apiSlice';

const PodcastsList = () => {
  const { data: podcasts } = useGetAllPodcastsQuery() as PodcastQueryResult;

  const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setFilteredPodcasts(podcasts);
  }, [podcasts]);

  useEffect(() => {
    setFilteredPodcasts(filterPodcasts(podcasts, searchQuery));
  }, [podcasts, searchQuery]);

  return (
    <>
      <h1>Podcasts</h1>
      <Search setSearchQuery={setSearchQuery} />
      {filteredPodcasts?.map((podcast: Podcast) => (
        <PodcastCard key={podcast.id.attributes['im:id']} podcast={podcast} />
      ))}
    </>
  );
};

export default PodcastsList;
