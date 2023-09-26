import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Search from '../Search';
import { setSearchQuery } from '../../redux/podcastSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../redux/apiSlice', () => ({
  useGetAllPodcastsQuery: jest.fn(),
}));

test('dispatches setSearchQuery action on search input change', () => {
  const dispatch = jest.fn();
  (useDispatch as jest.Mock).mockReturnValue(dispatch);

  render(<Search />);

  const searchInput = screen.getByPlaceholderText('Search Podcasts...');
  fireEvent.change(searchInput, { target: { value: 'Podcast' } });

  expect(dispatch).toHaveBeenCalledWith(setSearchQuery('Podcast'));
});

test('renders search input with correct placeholder', () => {
  render(<Search />);

  const searchInput = screen.getByPlaceholderText('Search Podcasts...');
  expect(searchInput).toBeInTheDocument();
});
