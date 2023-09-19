import React from 'react';
import { Link } from 'react-router-dom';
import { Podcast } from '../types/podcasts';

type PodcastCardProps = {
  podcast: Podcast;
};

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  return (
    <Link to={`/podcast/${podcast.id.attributes['im:id']}`}>
      <h2>{podcast.title.label}</h2>
      <p>Author: {podcast['im:artist'].label}</p>
    </Link>
  );
};

export default PodcastCard;
