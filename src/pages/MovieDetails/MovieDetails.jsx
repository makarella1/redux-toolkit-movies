import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  fetchAsyncDetails,
  removeDetails,
} from '../../features/movies/movieSlice';
import { SyncLoader } from 'react-spinners';

import './MovieDetails.scss';

export const MovieDetails = () => {
  const details = useSelector((state) => state.movies.details);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAsyncDetails(id));

    return () => {
      dispatch(removeDetails());
    };
  }, [dispatch, id]);

  console.log(details);

  return (
    <div className="details">
      {Object.keys(details).length === 0 ? (
        <SyncLoader size={20} color="white" />
      ) : (
        <>
          <div className="details__summary">
            <h4 className="details__title">{details.Title}</h4>
            <div className="details__rating">
              <span>IMDB Rating: {details.imdbRating}</span>
              <span>IMDB Votes: {details.imdbVotes}</span>
              <span>Runtime: {details.Runtime}</span>
              <span>Year: {details.Year}</span>
            </div>
            <div className="details__plot">{details.Plot}</div>
            <div className="details__info">
              <div>
                <span>Director: </span>
                <span>{details.Director}</span>
              </div>
              <div>
                <span>Stars: </span>
                <span>{details.Actors}</span>
              </div>
              <div>
                <span>Genres: </span>
                <span>{details.Genre}</span>
              </div>
              <div>
                <span>Language: </span>
                <span>{details.Language}</span>
              </div>
              <div>
                <span>Awards: </span>
                <span>{details.Awards}</span>
              </div>
            </div>
          </div>
          <div className="details__poster">
            <img src={details.Poster} alt={details.Title} />
          </div>
        </>
      )}
    </div>
  );
};
