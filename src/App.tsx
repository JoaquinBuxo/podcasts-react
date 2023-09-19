import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import PodcastsPage from './pages/PodcastsPage';
import PodcastDetailPage from './pages/PodcastDetailPage';
import EpisodeDetailPage from './pages/EpisodeDetailPage';
import { podcastDetailsLoader } from './services/podcasts';
import PodcastLayout from './layouts/PodcastLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<PodcastsPage />} />
      <Route
        path='podcast'
        element={<PodcastLayout />}
        loader={podcastDetailsLoader}
      >
        <Route
          path=':podcastId'
          element={<PodcastDetailPage />}
          loader={podcastDetailsLoader}
        />
        <Route
          path=':podcastId/episode/:episodeId'
          element={<EpisodeDetailPage />}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
