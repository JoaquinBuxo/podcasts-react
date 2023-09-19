import { Link } from 'react-router-dom';
import { Episode } from '../types/podcasts';

type PodcastDetailEpisodes = {
  episodes: Episode[];
  numEpisodes: number;
};

const PodcastDetailEpisodes: React.FC<PodcastDetailEpisodes> = ({
  episodes,
  numEpisodes,
}) => {
  return (
    <div>
      <h2>Episodes: {numEpisodes}</h2>
      {episodes.map((episode) => (
        <div key={episode.trackId}>
          <Link to={`episode/${episode.trackId}`}>{episode.trackName}</Link> |{' '}
          {episode.releaseDate} |{episode.trackTimeMillis}
        </div>
      ))}
    </div>
  );
};

export default PodcastDetailEpisodes;
