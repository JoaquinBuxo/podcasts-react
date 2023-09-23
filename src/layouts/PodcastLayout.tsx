import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetPodcastDetailsQuery } from '../redux/apiSlice';
import { setLoading } from '../redux/podcastSlice';
import PodcastDetailCard from '../components/PodcastDetailCard';

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
    <div className='podcast-layout'>
      <>
        <PodcastDetailCard podcast={data.podcast} />
        <Outlet context={[data]} />
      </>
    </div>
  );
};

export default PodcastLayout;
