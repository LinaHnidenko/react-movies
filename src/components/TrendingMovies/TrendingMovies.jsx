import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovie } from 'Services/API';

export const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingMovie();
        // console.log(data.results.id);
        return setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ul className="">
        {movies.map(
          movie =>
            movie.title && (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}> {movie.title}</Link>
              </li>
            )
        )}
      </ul>
    </>
  );
};
