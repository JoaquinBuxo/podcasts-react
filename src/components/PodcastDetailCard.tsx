import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import { Link, useParams, useMatch } from 'react-router-dom';
import { PodcastDetail } from '../types/podcasts';
import { useGetAllPodcastsQuery } from '../redux/apiSlice';

type PodcastDetailProps = {
  podcast: PodcastDetail;
};

const PodcastDetailCard: React.FC<PodcastDetailProps> = ({ podcast }) => {
  const { podcastId } = useParams();

  // I need to get this data to get the description of the podcast
  const { data: allPodcasts } = useGetAllPodcastsQuery();
  const podcastDetails = allPodcasts?.find(
    (podcast) => podcast.id.attributes['im:id'] === podcastId
  );

  // Check if episodeId is in the URL
  const match = useMatch('/podcast/:podcastId/:episodeId');
  const isLink = !match;

  const content = (
    <Card sx={{ m: 4 }}>
      <CardMedia
        component='img'
        image={podcast.artworkUrl600}
        alt={podcast.collectionName}
        sx={{
          width: '100%',
          mx: 'auto',
          py: 4,
          px: 8,
          boxSizing: 'border-box',
          borderRadius: '10%',
        }}
      />
      <CardContent>
        <Divider sx={{ mb: 2, mt: -2, mx: 'auto' }} />
        <Typography variant='h5' component='div' fontWeight='bold'>
          {podcast.collectionName}
        </Typography>
        <Typography
          variant='subtitle1'
          color='text.secondary'
          fontStyle='italic'
        >
          by {podcast.artistName}
        </Typography>
        <Divider sx={{ my: 2, mx: 'auto' }} />
        <Typography variant='h6' component='div' fontWeight='bold'>
          Description:
        </Typography>
        <Typography variant='h6' fontStyle='italic'>
          {podcastDetails?.summary.label}
        </Typography>
      </CardContent>
    </Card>
  );

  return isLink ? (
    <Link to={`/podcast/${podcastId}`}>{content}</Link>
  ) : (
    <div>{content}</div>
  );
};

export default PodcastDetailCard;
