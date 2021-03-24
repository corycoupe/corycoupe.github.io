import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Home />
      </Fragment>
    </Router>
  );
};

export default App;
