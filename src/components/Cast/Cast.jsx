import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'Services/API';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const movieCast = await getMovieCast(id);

        return setCast(movieCast.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [id]);

  return (
    <>
      <ul>
        {cast &&
          cast.length &&
          cast.map(({ character, name, profile_path, id }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : `https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png`
                  }
                  alt=""
                />
                <p>{name}</p>
                {character && <p>Character: {character}</p>}
              </li>
            );
          })}
      </ul>
    </>
  );
};
