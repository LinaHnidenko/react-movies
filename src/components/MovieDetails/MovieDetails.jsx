import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'Services/API';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
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
    <div className={css.container}>
      <Link to={location.state} className={css.btn}>
        Go Back
      </Link>
      <div>
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
        <h2>{title}</h2>
        <p>User Score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres &&
            genres.length > 0 &&
            genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
        </ul>
      </div>
      <div className={css.addInfo}>
        <h2>Additional information</h2>
        <Link to="cast" state={location} className={css.link}>
          Cast
        </Link>
        <Link to="reviews" state={location} className={css.link}>
          Reviews
        </Link>
      </div>

      <Outlet />
    </div>
  );
};
