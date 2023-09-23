import { useOutletContext, useParams } from 'react-router-dom';
import { PodcastDetail, Episode } from '../types/podcasts';
import PodcastEpisodePlayer from '../components/PodcastEpisodePlayer';

const EpisodeCard = () => {
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
      <p dangerouslySetInnerHTML={{ __html: episode.description }} />
      <PodcastEpisodePlayer audioUrl={episode.previewUrl} />
    </div>
  );
};

export default EpisodeCard;
