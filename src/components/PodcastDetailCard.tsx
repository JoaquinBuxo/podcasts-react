import { useLocation } from 'react-router-dom';
import { PodcastDetail } from '../types/podcasts';

type PodcastDetailProps = {
  podcast: PodcastDetail;
};

const PodcastDetailCard: React.FC<PodcastDetailProps> = ({ podcast }) => {
  const location = useLocation();
  const summary = location.state?.summary || podcast.collectionViewUrl;

  return (
    <div>
      <img src={podcast.artworkUrl100} alt={podcast.collectionName} />
      <h2>{podcast.collectionName}</h2>
      <p>Author: {podcast.artistName}</p>
      <p>Description: {summary}</p>
    </div>
  );
};

export default PodcastDetailCard;
