import { Outlet } from 'react-router-dom';
import PodcastDetailCard from '../components/PodcastDetailCard';
import { useParams } from 'react-router-dom';
import { useGetPodcastDetailsQuery } from '../redux/apiSlice';

const PodcastLayout = () => {
  const { podcastId } = useParams();
  const { data, isLoading } = useGetPodcastDetailsQuery(podcastId);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='podcast-layout'>
      {data && (
        <>
          <PodcastDetailCard podcast={data.podcast} />
          <Outlet context={[data]} />
        </>
      )}
    </div>
  );
};

export default PodcastLayout;
