import { Link } from 'react-router-dom';
import './MovieCard.scss';

export const MovieCard = ({ data }) => {
  return (
    <div className="movie">
      <Link to={`/movies/${data.imdbID}`}>
        <div className="movie__inner">
          <div className="movie__top">
            <img className="movie__poster" src={data.Poster} alt={data.Title} />
          </div>
          <div className="movie__bottom">
            <div className="movie__info">
              <h4 className="movie__title">{data.Title}</h4>
              <p className="movie__year">{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
