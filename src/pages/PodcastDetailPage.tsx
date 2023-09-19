import { useLoaderData } from 'react-router-dom';
import { PodcastDetailResult } from '../types/podcasts';
import PodcastDetailEpisodes from '../components/PodcastDetailEpisodes';

const PodcastDetailPage = () => {
  const {
    resultCount,
    results: [, ...episodes],
  } = useLoaderData() as PodcastDetailResult;

  return (
    <div>
      PodcastDetailPage
      <PodcastDetailEpisodes
        episodes={episodes}
        numEpisodes={resultCount - 1}
      />
    </div>
  );
};

export default PodcastDetailPage;
