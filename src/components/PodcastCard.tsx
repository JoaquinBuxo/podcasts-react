import React from 'react';
import { Link } from 'react-router-dom';
import { Podcast } from '../types/podcasts';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

type PodcastCardProps = {
  podcast: Podcast;
};

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => (
  <Box sx={{ position: 'relative' }}>
    <Link to={`/podcast/${podcast.id.attributes['im:id']}`}>
      <CardMedia
        component='img'
        image={podcast['im:image'][2].label}
        alt={podcast['im:name'].label}
        sx={{
          borderRadius: '50%',
          position: 'absolute',
          width: { xs: '30%', sm: '45%', md: '60%' },
          textAlign: 'center',
          ml: { xs: '35%', sm: '30%', md: '20%' },
          mt: { xs: '-15%', sm: '-20%', md: '-25%' },
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
