import { PodcastDetail } from '../types/podcasts';

type PodcastDetailProps = {
  podcast: PodcastDetail;
};

const PodcastDetailCard: React.FC<PodcastDetailProps> = ({ podcast }) => {
  return (
    <div>
      <img src={podcast.artworkUrl100} alt={podcast.collectionName} />
      <h2>{podcast.collectionName}</h2>
      <p>Author: {podcast.artistName}</p>
      <p>Description: {podcast.collectionExplicitness}</p>
    </div>
  );
};

export default PodcastDetailCard;
