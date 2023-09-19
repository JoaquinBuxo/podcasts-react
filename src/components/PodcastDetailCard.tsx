import { useLoaderData } from 'react-router-dom';
import { PodcastDetailResult } from '../types/podcasts';

const PodcastDetailCard = () => {
  const {
    results: [podcast],
  } = useLoaderData() as PodcastDetailResult;
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
