import { Search } from '../Search/Search';
import { MovieList } from '../MovieList/MovieList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  removeShowsAndMovies,
} from '../../features/movies/movieSlice';
import { showLoader } from '../../features/movies/uiSlice';
import {
  INITIAL_SHOWS_TERM,
  INITIAL_MOVIES_TERM,
} from '../../common/search-values';

import { SyncLoader } from 'react-spinners';

export const Home = () => {
  const searchKeyword = useSelector((state) => state.movies.searchKeyword);
  const isLoading = useSelector((state) => state.ui.showLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoader(true));
    const fetchMovies = () => {
      dispatch(
        fetchAsyncMovies(
          searchKeyword.trim() !== '' ? searchKeyword : INITIAL_MOVIES_TERM
        )
      );
      dispatch(
        fetchAsyncShows(
          searchKeyword.trim() !== '' ? searchKeyword : INITIAL_SHOWS_TERM
        )
      );
      dispatch(showLoader(false));
    };

    const timeout = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => {
      dispatch(removeShowsAndMovies());
      clearTimeout(timeout);
    };
  }, [dispatch, searchKeyword]);

  return (
    <>
      <Search />
      <main className="content">
        {isLoading ? <SyncLoader size={20} color="white" /> : <MovieList />}
      </main>
    </>
  );
};
