import { useEffect, useMemo } from 'react';
import { Podcast, PodcastQueryResult } from '../types/podcasts';
import PodcastCard from './PodcastCard';
import { filterPodcasts } from '../utils/podcastUtils';

import { setLoading } from '../redux/podcastSlice';
import { useGetAllPodcastsQuery } from '../redux/apiSlice';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PodcastsList = () => {
  const { data: podcasts, isLoading } =
    useGetAllPodcastsQuery() as PodcastQueryResult;

  const dispatch = useDispatch();

  const searchQuery = useSelector(
    (state: RootState) => state.podcast.searchQuery
  );

  useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  const filteredPodcasts = useMemo(
    () => filterPodcasts(podcasts, searchQuery),
    [podcasts, searchQuery]
  );

  if (isLoading || !podcasts) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Podcasts</h1>
      {filteredPodcasts?.map((podcast: Podcast) => (
        <PodcastCard key={podcast.id.attributes['im:id']} podcast={podcast} />
      ))}
    </>
  );
};

export default PodcastsList;
