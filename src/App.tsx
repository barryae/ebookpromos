import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main'
import InfoForm from './pages/InfoForm'
import Checkout from './pages/Checkout'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/info">
        <InfoForm />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
      <Route exact path="/">
        <Main />
      </Route>
    </Router>
  )
}

export default App;

