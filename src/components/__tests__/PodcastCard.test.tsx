import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PodcastCard from '../PodcastCard';
import { mockPodcasts } from '../__mocks__/mockData';

const renderPodcastCard = () => {
  render(
    <Router>
      <PodcastCard podcast={mockPodcasts[0]} />
    </Router>
  );
};

test('renders podcast name and author', () => {
  renderPodcastCard();

  const podcastName = screen.getByText(/Podcast 1/i);
  expect(podcastName).toBeInTheDocument();

  const podcastAuthor = screen.getByText(/Artist 1/i);
  expect(podcastAuthor).toBeInTheDocument();
});

test('renders the correct image', () => {
  renderPodcastCard();

  const podcastImage = screen.getByAltText(/Podcast 1/i);
  expect(podcastImage).toHaveAttribute('src', 'image31.jpg');
});

test('renders the correct link', () => {
  renderPodcastCard();

  const podcastLink = screen.getByRole('link');
  expect(podcastLink).toBeInTheDocument();
  expect(podcastLink).toHaveAttribute('href', '/podcast/1');
});
