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
          {episode.trackName} | {episode.releaseDate} |{' '}
          {episode.trackTimeMillis}
        </div>
      ))}
    </div>
  );
};

export default PodcastDetailEpisodes;
