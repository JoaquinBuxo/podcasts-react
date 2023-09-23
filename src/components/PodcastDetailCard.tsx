import { Link, useLocation, useParams, useMatch } from 'react-router-dom';
import { PodcastDetail } from '../types/podcasts';

type PodcastDetailProps = {
  podcast: PodcastDetail;
};

const PodcastDetailCard: React.FC<PodcastDetailProps> = ({ podcast }) => {
  const { podcastId } = useParams();
  const location = useLocation();
  const summary = location.state?.summary || podcast.collectionViewUrl;

  const isEpisode = useMatch('podcast/:podcastId/episode/:episodeId');

  const cardContent = (
    <>
      <img src={podcast.artworkUrl100} alt={podcast.collectionName} />
      <h2>{podcast.collectionName}</h2>
      <p>Author: {podcast.artistName}</p>
      <p>Description: {summary}</p>
    </>
  );

  return isEpisode ? (
    <Link to={`/podcast/${podcastId}`}>{cardContent}</Link>
  ) : (
    <div>{cardContent}</div>
  );
};

export default PodcastDetailCard;
