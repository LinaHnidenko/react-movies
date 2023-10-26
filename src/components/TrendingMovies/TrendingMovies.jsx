import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovie } from 'Services/API';
import css from './TrendingMovies.module.css';
export const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingMovie();

        return setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ul className={css.list}>
        {movies.map(
          movie =>
            movie.title && (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={location}>
                  {' '}
                  {movie.title}
                </Link>
              </li>
            )
        )}
      </ul>
    </>
  );
};
