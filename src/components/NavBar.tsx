import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  AppBar,
  Box,
  CircularProgress,
  Toolbar,
  Typography,
} from '@mui/material';

const NavBar = () => {
  const isLoading = useSelector((state: RootState) => state.podcast.isLoading);

  return (
    <AppBar position='static' color='default'>
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          sx={{
            flexGrow: 1,
            color: '#3870B8',
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}
        >
          <Link to='/'>Podcaster</Link>
        </Typography>
        {isLoading && (
          <Box sx={{ pr: 2 }}>
            <CircularProgress />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
