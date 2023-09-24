import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { useOutletContext, useParams } from 'react-router-dom';
import EpisodeCard from '../EpisodeCard';
import { mockPodcastDetail, mockEpisodes } from '../__mocks__/mockData';

jest.mock('react-router-dom', () => ({
  useOutletContext: jest.fn(),
  useParams: jest.fn(),
}));

jest.mock('../PodcastEpisodePlayer', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

describe('EpisodeCard', () => {
  beforeEach(() => {
    // Mock the necessary data for testing
    (useOutletContext as jest.Mock).mockReturnValueOnce([
      {
        podcast: mockPodcastDetail[0],
        episodes: mockEpisodes,
      },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders episode details when there is a matching episode', () => {
    (useParams as jest.Mock).mockReturnValueOnce({ episodeId: '1' });
    const { getByText } = render(<EpisodeCard />);

    expect(getByText('Episode 1')).toBeInTheDocument();
    expect(getByText('This is Episode 1 of Podcast 1.')).toBeInTheDocument();
  });

  test('renders "No episode found" message when there is no matching episode', () => {
    (useParams as jest.Mock).mockReturnValueOnce({ episodeId: '30' });

    const { getByText } = render(<EpisodeCard />);

    expect(getByText('No episode found')).toBeInTheDocument();
  });
});
