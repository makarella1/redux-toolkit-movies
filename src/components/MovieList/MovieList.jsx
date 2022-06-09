import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { MovieCard } from '../MovieCard/MovieCard';
import { settings } from '../../common/settings';

import Slider from 'react-slick';

import './MovieList.scss';

export const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const shows = useSelector((state) => state.movies.shows);

  let moviesContent = null;
  let showsContent = null;

  moviesContent =
    movies.Response === 'True' ? (
      <div className="content__movie-container">
        <Slider {...settings}>
          {movies.Search.map((movie) => {
            return <MovieCard key={uuidv4()} data={movie} />;
          })}
        </Slider>
      </div>
    ) : (
      <div className="content__movie-container">{movies.Error}</div>
    );

  showsContent =
    shows.Response === 'True' ? (
      <div className="content__movie-container">
        <Slider {...settings}>
          {shows.Search.map((show) => {
            return <MovieCard key={uuidv4()} data={show} />;
          })}
        </Slider>
      </div>
    ) : (
      <div className="content__movie-container">{movies.Error}</div>
    );

  return (
    <div className="content__movie-wrapper">
      <div className="content__movie-list">
        <h2 className="content__header">Movies</h2>
        {moviesContent}
      </div>
      <div className="content__show-list">
        <h2 className="content__header">Shows</h2>
        {showsContent}
      </div>
    </div>
  );
};
