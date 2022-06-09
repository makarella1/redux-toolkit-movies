import { useDispatch, useSelector } from 'react-redux';
import { setSearchKeyword } from '../../features/movies/movieSlice';
import './Search.scss';

export const Search = () => {
  const dispatch = useDispatch();
  const searchKeyword = useSelector((state) => state.movies.searchKeyword);

  const changeInputHandler = (event) => {
    dispatch(setSearchKeyword(event.target.value));
  };

  return (
    <form className="app__form">
      <input
        className="app__search"
        type="text"
        value={searchKeyword}
        placeholder="What movie or show are you looking for?"
        onChange={changeInputHandler}
      />
    </form>
  );
};
