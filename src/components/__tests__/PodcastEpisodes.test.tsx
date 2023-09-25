import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { useOutletContext, BrowserRouter as Router } from 'react-router-dom';
import { mockPodcastDetail, mockEpisodes } from '../__mocks__/mockData';
import PodcastEpisodes from '../PodcastEpisodes';
import { Episode } from '../../types/podcasts';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useOutletContext: jest.fn(),
}));

const renderPodcastEpisodes = (
  podcast = mockPodcastDetail[0],
  episodes = mockEpisodes
) => {
  (useOutletContext as jest.Mock).mockReturnValue([{ podcast, episodes }]);
  const screen = render(
    <Router>
      <PodcastEpisodes />
    </Router>
  );

  return { screen, podcast, episodes };
};

test('renders without crashing and displays the correct number of episodes', () => {
  const { screen, episodes } = renderPodcastEpisodes();

  const episodesCount = screen.getByText(`Episodes: ${episodes.length}`);
  expect(episodesCount).toBeInTheDocument();
});

test('renders all episodes', () => {
  const { screen, episodes } = renderPodcastEpisodes();

  episodes.forEach((episode: Episode) => {
    const episodeElement = screen.getByText(episode.trackName);
    expect(episodeElement).toBeInTheDocument();
  });
});

test('navigates to the correct route when an episode is clicked', () => {
  const { screen, episodes } = renderPodcastEpisodes();

  episodes.forEach((episode: Episode) => {
    const episodeElement = screen.getByText(episode.trackName);
    fireEvent.click(episodeElement);

    const expectedRoute = `/episode/${episode.trackId}`;
    expect(window.location.pathname).toBe(expectedRoute);

    window.history.pushState({}, '', '/');
  });
});
