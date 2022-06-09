import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        {' '}
        <Link to="/"> Redux Movies </Link>
      </div>
    </header>
  );
};
