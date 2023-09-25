import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useParams, useMatch, BrowserRouter as Router } from 'react-router-dom';
import { useGetAllPodcastsQuery } from '../../redux/apiSlice';
import { mockPodcastDetail, mockPodcasts } from '../__mocks__/mockData';
import PodcastDetailCard from '../PodcastDetailCard';
import { Podcast } from '../../types/podcasts';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useMatch: jest.fn(),
}));

jest.mock('../../redux/apiSlice', () => ({
  useGetAllPodcastsQuery: jest.fn(),
}));

test('renders the correct podcast details', () => {
  (useParams as jest.Mock).mockReturnValue({ podcastId: '1' });
  (useMatch as jest.Mock).mockReturnValue(null);
  (useGetAllPodcastsQuery as jest.Mock).mockReturnValue({
    data: mockPodcasts,
  });

  render(
    <Router>
      <PodcastDetailCard podcast={mockPodcastDetail[0]} />
    </Router>
  );

  const podcastName = screen.getByText(mockPodcastDetail[0].collectionName);
  const artistName = screen.getByText(`by ${mockPodcastDetail[0].artistName}`);
  const checkDescription = mockPodcasts.find(
    (podcast: Podcast) => podcast.id.attributes['im:id'] === '1'
  )?.summary.label;

  expect(podcastName).toBeInTheDocument();
  expect(artistName).toBeInTheDocument();
  if (checkDescription) {
    const description = screen.getByText(checkDescription);
    expect(description).toBeInTheDocument();
  }
});
