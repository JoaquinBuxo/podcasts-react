import { useOutletContext, useParams } from 'react-router-dom';
import { PodcastDetail, Episode } from '../types/podcasts';
import PodcastEpisodePlayer from '../components/PodcastEpisodePlayer';
import { Card, CardContent, Divider, Typography } from '@mui/material';

const EpisodeCard = () => {
  const [data]: [{ podcast: PodcastDetail; episodes: Episode[] }] =
    useOutletContext();

  const { episodeId = '0' } = useParams<{ episodeId: string }>();

  const episode = data.episodes.find(
    (episode: Episode) => episode.trackId === parseInt(episodeId)
  );

  if (!episode) {
    return <div>No episode found</div>;
  }

  return (
    <Card sx={{ my: 4, p: 2 }}>
      <CardContent>
        <Typography
          variant='h4'
          component='div'
          fontWeight='bold'
          sx={{ mb: 3 }}
        >
          {episode.trackName}
        </Typography>
        <Typography
          variant='body1'
          sx={{ mb: 4 }}
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />
        <Divider sx={{ mb: 3 }} />
        <PodcastEpisodePlayer audioUrl={episode.previewUrl} />
      </CardContent>
    </Card>
  );
};

export default EpisodeCard;
