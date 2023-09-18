import React from 'react';
import { Podcast } from '../types/podcasts';

type PodcastCardProps = {
  podcast: Podcast;
};

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  return (
    <div>
      <h2>{podcast.title.label}</h2>
      <p>Author: {podcast['im:artist'].label}</p>
    </div>
  );
};

export default PodcastCard;
