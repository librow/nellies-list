import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './routes/Home';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
