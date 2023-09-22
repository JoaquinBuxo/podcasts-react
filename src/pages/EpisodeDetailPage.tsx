import { useOutletContext, useParams } from 'react-router-dom';
import { PodcastDetail, Episode } from '../types/podcasts';

const EpisodeDetailPage = () => {
  const [data]: [{ podcast: PodcastDetail; episodes: Episode[] }] =
    useOutletContext();

  const { episodeId = '0' } = useParams<{ episodeId: string }>();

  const episode = data.episodes.find(
    (episode: Episode) => episode.trackId === parseInt(episodeId)
  );

  if (!episode) {
    return <div>No episode found</div>;
  }

  return (
    <div>
      <h2>{episode.trackName}</h2>
      <p>{episode.description}</p>
    </div>
  );
};

export default EpisodeDetailPage;
