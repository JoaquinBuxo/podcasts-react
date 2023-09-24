import { Link } from 'react-router-dom';
import { PodcastDetail, Episode } from '../types/podcasts';
import { useOutletContext } from 'react-router-dom';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import moment from 'moment';

const PodcastEpisodes = () => {
  const [data]: [{ podcast: PodcastDetail; episodes: Episode[] }] =
    useOutletContext();

  return (
    <>
      <Card sx={{ my: 4 }}>
        <CardContent>
          <Typography variant='h5' fontWeight='bold'>
            Episodes: {data.episodes.length}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent sx={{ maxHeight: '70vh', overflow: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Title</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Date</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.episodes.map((episode, index: number) => (
                <TableRow
                  key={episode.trackId}
                  sx={{
                    backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#fff',
                  }}
                >
                  <TableCell>
                    <Link
                      to={`episode/${episode.trackId}`}
                      style={{ color: '#3870B8' }}
                    >
                      {episode.trackName}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {moment(episode.releaseDate).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {moment.utc(episode.trackTimeMillis).format('mm:ss')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default PodcastEpisodes;
