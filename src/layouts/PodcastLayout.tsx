import { Outlet, useLoaderData } from 'react-router-dom';
import PodcastDetailCard from '../components/PodcastDetailCard';
import { PodcastDetailResult } from '../types/podcasts';

const PodcastLayout = () => {
  const {
    results: [podcast],
  } = useLoaderData() as PodcastDetailResult;

  return (
    <div className='podcast-layout'>
      <PodcastDetailCard podcast={podcast} />
      <Outlet />
    </div>
  );
};

export default PodcastLayout;
