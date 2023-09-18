import React, { useCallback } from 'react';

type SearchProps = {
  setSearchQuery: (query: string) => void;
};

const Search: React.FC<SearchProps> = ({ setSearchQuery }) => {
  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      setSearchQuery(query);
    },
    [setSearchQuery]
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
