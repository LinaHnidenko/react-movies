import { Home } from 'components/pages/Home';
import { Movies } from 'components/pages/Movies';
import { Route, Routes } from 'react-router';
import { Layout } from './Layout/Layout';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </>
  );
};
