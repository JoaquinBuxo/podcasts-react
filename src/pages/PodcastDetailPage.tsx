import { useLoaderData } from 'react-router-dom';
import PodcastDetailCard from '../components/PodcastDetailCard';
import { PodcastDetailResult } from '../types/podcasts';
import PodcastDetailEpisodes from '../components/PodcastDetailEpisodes';

const PodcastDetailPage = () => {
  const {
    resultCount,
    results: [podcast, ...episodes],
  } = useLoaderData() as PodcastDetailResult;

  return (
    <div>
      PodcastDetailPage
      <PodcastDetailCard podcast={podcast} />
      <PodcastDetailEpisodes
        episodes={episodes}
        numEpisodes={resultCount - 1}
      />
    </div>
  );
};

export default PodcastDetailPage;
