import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieBySearchText } from 'Services/API';
import css from './Movies.module.css';

export const Movies = () => {
  const [searchText, setSearchText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByQuery, setMoviesByQuery] = useState([]);

  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  const handleChange = ({ target }) => {
    setSearchText(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchText });
  };

  useEffect(() => {
    if (movieName === '') return;
    setMoviesByQuery([]);
    const fetchMovies = async () => {
      try {
        const movies = await getMovieBySearchText(movieName);

        return setMoviesByQuery(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [movieName]);

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className="form-label">
          Search movies
          <input type="text" onChange={handleChange} className="form-control" />
        </label>
        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
      <ul>
        {moviesByQuery.length > 0 ? (
          moviesByQuery.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={location}>
                {title}
              </Link>
            </li>
          ))
        ) : (
          <p>Please, enter a valid movie name.</p>
        )}
      </ul>
    </div>
  );
};
