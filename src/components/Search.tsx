import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/podcastSlice';

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
    <>
      <label>Search</label>
      <div>
        <input
          type='text'
          name='search'
          placeholder='Search Podcasts'
          onChange={handleSearch}
          autoComplete='off'
        />
      </div>
    </>
  );
};

export default Search;
