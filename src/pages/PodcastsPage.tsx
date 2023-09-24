import PodcastsList from '../components/PodcastsList';
import Search from '../components/Search';
import { Container } from '@mui/material';

const PodcastsPage = () => (
  <Container>
    <Search />
    <PodcastsList />
  </Container>
);

export default PodcastsPage;
