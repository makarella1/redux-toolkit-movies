import { Routes, Route } from 'react-router-dom';

import './App.scss';
import './index.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
