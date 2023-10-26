import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'Services/API';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const movieReviews = await getMovieReviews(id);

        return setReviews(movieReviews.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [id]);

  return (
    <ul>
      {reviews.length ? (
        reviews.map(({ author, id, content, created_at }) => {
          return (
            <li key={id}>
              {' '}
              <h3>Author: {author}</h3>
              <p>{content}</p>
              <p>Created at: {created_at}</p>
            </li>
          );
        })
      ) : (
        <p>We don't have reviews for this movie.</p>
      )}
    </ul>
  );
};
