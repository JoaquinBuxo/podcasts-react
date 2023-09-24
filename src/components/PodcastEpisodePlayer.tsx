import React from 'react';

type PodcastEpisodePlayerProps = {
  audioUrl: string;
};

const PodcastEpisodePlayer: React.FC<PodcastEpisodePlayerProps> = ({
  audioUrl,
}) => {
  return (
    <audio controls style={{ width: '100%' }}>
      <source src={audioUrl} type='audio/mpeg' />
      Your browser does not support the audio element.
    </audio>
  );
};

export default PodcastEpisodePlayer;
