import { Link } from 'react-router-dom';
import PodcastDetailCard from '../components/PodcastDetailCard';

const PodcastDetailPage = () => {
  return (
    <div>
      PodcastDetailPage
      <PodcastDetailCard />
      <Link to='episode'>Link to episode</Link>
    </div>
  );
};

export default PodcastDetailPage;
