import React from 'react';
import { Link } from 'react-router-dom';
import { Podcast } from '../types/podcasts';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

type PodcastCardProps = {
  podcast: Podcast;
};

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => (
  <Box sx={{ position: 'relative' }}>
    <Link
      to={`/podcast/${podcast.id.attributes['im:id']}`}
      state={{ summary: podcast.summary.label }}
    >
      <CardMedia
        component='img'
        image={podcast['im:image'][2].label}
        alt={podcast.title.label}
        sx={{
          borderRadius: '50%',
          position: 'absolute',
          width: '60%',
          textAlign: 'center',
          ml: '20%',
          mt: '-25%',
        }}
      />
      <Card sx={{ my: 2, textAlign: 'center', pt: '90px', mt: '90px' }}>
        <CardContent>
          <Typography variant='h5' component='div' noWrap>
            {podcast['im:name'].label}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' noWrap>
            Author: {podcast['im:artist'].label}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  </Box>
);

export default PodcastCard;
