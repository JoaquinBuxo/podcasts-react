import { Outlet } from 'react-router-dom';
import PodcastDetailCard from '../components/PodcastDetailCard';
import { useParams } from 'react-router-dom';
import { useGetPodcastDetailsQuery } from '../redux/apiSlice';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/podcastSlice';
import { useEffect } from 'react';

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
