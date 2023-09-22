import { Link } from 'react-router-dom';
import { PodcastDetail, Episode } from '../types/podcasts';
import { useOutletContext } from 'react-router-dom';

const PodcastEpisodes = () => {
  const [data]: [{ podcast: PodcastDetail; episodes: Episode[] }] =
    useOutletContext();

  return (
    <div>
      <h2>Episodes: {data.episodes.length}</h2>
      {data.episodes.map((episode: Episode) => (
        <div key={episode.trackId}>
          <Link to={`episode/${episode.trackId}`}>{episode.trackName}</Link>|{' '}
          {episode.releaseDate} |{episode.trackTimeMillis}
        </div>
      ))}
    </div>
  );
};

export default PodcastEpisodes;
