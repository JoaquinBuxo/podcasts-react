import { Link, useParams } from 'react-router-dom';
import { Episode, PodcastDetailsQueryResult } from '../types/podcasts';
import { useGetPodcastDetailsQuery } from '../redux/apiSlice';

const PodcastEpisodes = () => {
  const { podcastId } = useParams();
  const {
    data: { episodes },
  } = useGetPodcastDetailsQuery(podcastId) as PodcastDetailsQueryResult;

  return (
    <div>
      <h2>Episodes: {episodes.length}</h2>
      {episodes.map((episode: Episode) => (
        <div key={episode.trackId}>
          <Link to={`episode/${episode.trackId}`}>{episode.trackName}</Link> |{' '}
          {episode.releaseDate} |{episode.trackTimeMillis}
        </div>
      ))}
    </div>
  );
};

export default PodcastEpisodes;
