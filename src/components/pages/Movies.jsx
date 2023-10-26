import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMovieBySearchText } from 'Services/API';

export const Movies = () => {
  const [searchText, setSearchText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByQuery, setMoviesByQuery] = useState([]);

  const handleChange = ({ target }) => {
    setSearchText(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchText });
  };

  useEffect(() => {
    const searchText = searchParams.get('query');
    if (!searchText) return;
    const fetchMovies = async () => {
      try {
        const movies = await getMovieBySearchText(searchText);

        return setMoviesByQuery(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [searchParams]);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Search movies
          <input type="text" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {moviesByQuery.length ? (
        moviesByQuery.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))
      ) : (
        <p>Sorry, we can't find movie by this name.</p>
      )}
    </main>
  );
};
