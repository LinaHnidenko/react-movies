import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'Services/API';

export const MovieDetails = () => {
  const { id } = useParams();

  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await getMovieDetails(id);

        return setMovieDetail(details);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [id]);

  const { title, overview, genres, poster_path, vote_average } = movieDetail;

  return (
    <main>
      <div>
        <img src={poster_path} alt="" />
        <h2>{title}</h2>
        <p>User Score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres &&
            genres.length &&
            genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
        </ul>
      </div>
      <div>
        <h2>Additional information</h2>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </main>
  );
};
