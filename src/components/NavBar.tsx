import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const NavBar = () => {
  const isLoading = useSelector((state: RootState) => state.podcast.isLoading);

  return (
    <nav>
      <Link to='/'>
        <h1>Podcaster</h1>
      </Link>
      {isLoading && <div className='loading-indicator'>Loading Navbar...</div>}
    </nav>
  );
};

export default NavBar;
