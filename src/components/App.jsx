// import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Home } from 'components/pages/Home';
import { Layout } from './Layout/Layout';

import { Movies } from 'components/pages/Movies';
import { Cast } from './Cast/Cast';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Reviews } from './Reviews/Reviews';

// Not working

// const Movies = lazy(() => import('components/pages/Movies'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
