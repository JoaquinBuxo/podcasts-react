import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PodcastEpisodePlayer from '../PodcastEpisodePlayer';

test('displays the audio element fallback message when the browser does not support the audio element', () => {
  const audioUrl = 'test-audio-url';
  const { getByText } = render(<PodcastEpisodePlayer audioUrl={audioUrl} />);
  const fallbackMessage = getByText(
    'Your browser does not support the audio element.'
  );
  expect(fallbackMessage).toBeInTheDocument();
});
