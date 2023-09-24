import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetPodcastDetailsQuery } from '../redux/apiSlice';
import { setLoading } from '../redux/podcastSlice';
import PodcastDetailCard from '../components/PodcastDetailCard';
import { Grid } from '@mui/material';

const PodcastLayout = () => {
  const { podcastId } = useParams();
  const { data, isLoading } = useGetPodcastDetailsQuery(podcastId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container padding={4} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
      <Grid item xs={12} md={4}>
        <PodcastDetailCard podcast={data.podcast} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Outlet context={[data]} />
      </Grid>
    </Grid>
  );
};

export default PodcastLayout;
