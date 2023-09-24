import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const renderNavBar = () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
};

test('renders the Nav Bar component', () => {
  (useSelector as jest.Mock).mockReturnValue(false);
  renderNavBar();
  const navBarElement = screen.getByText('Podcaster');
  expect(navBarElement).toBeInTheDocument();
});

test('displays loading spinner when isLoading is true', () => {
  (useSelector as jest.Mock).mockReturnValue(true);
  renderNavBar();
  const loadingSpinnerElement = screen.getByRole('progressbar');
  expect(loadingSpinnerElement).toBeInTheDocument();
});

test('does not display loading spinner when isLoading is false', () => {
  (useSelector as jest.Mock).mockReturnValue(false);
  renderNavBar();
  const loadingSpinnerElement = screen.queryByRole('progressbar');
  expect(loadingSpinnerElement).not.toBeInTheDocument();
});
