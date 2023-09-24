import { useEffect, useMemo } from 'react';
import { Podcast, PodcastQueryResult } from '../types/podcasts';
import PodcastCard from './PodcastCard';
import { filterPodcasts } from '../utils/podcastUtils';

import { setLoading } from '../redux/podcastSlice';
import { useGetAllPodcastsQuery } from '../redux/apiSlice';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Typography, Grid, Chip } from '@mui/material';

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
      <Typography variant='h4' color='textPrimary' sx={{ mb: '2rem' }}>
        Podcasts <Chip label={filteredPodcasts.length} color='primary' />
      </Typography>

      <Grid container spacing={2} overflow='auto' height={'70vh'}>
        {filteredPodcasts.map((podcast: Podcast) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={podcast.id.attributes['im:id']}
            sx={{ position: 'relative' }}
          >
            <PodcastCard podcast={podcast} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PodcastsList;
