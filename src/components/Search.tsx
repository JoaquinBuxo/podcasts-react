import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/podcastSlice';
import { Box, TextField } from '@mui/material';

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      dispatch(setSearchQuery(query));
    },
    [dispatch]
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <TextField
        type='text'
        name='search'
        placeholder='Search Podcasts...'
        onChange={handleSearch}
        autoComplete='off'
        sx={{
          width: '100%',
          fontSize: '1.5rem',
          marginTop: '2rem',
          marginBottom: '2rem',
        }}
      />
    </Box>
  );
};

export default Search;
