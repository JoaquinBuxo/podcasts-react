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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<PodcastsPage />} />
      <Route path='podcast/:id' element={<PodcastDetailPage />} />
      <Route path='podcast/:id/episode' element={<EpisodeDetailPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
