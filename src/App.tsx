import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import PodcastsPage from './pages/PodcastsPage';
import EpisodeDetailPage from './pages/EpisodeDetailPage';
import PodcastLayout from './layouts/PodcastLayout';
import PodcastEpisodes from './components/PodcastEpisodes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<PodcastsPage />} />
      <Route path='podcast' element={<PodcastLayout />}>
        <Route path=':podcastId' element={<PodcastEpisodes />} />
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
