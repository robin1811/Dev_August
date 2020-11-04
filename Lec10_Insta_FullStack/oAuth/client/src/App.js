import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Home from './components/homepage';
import Login from './components/login';
import Navbar from './components/navbar';

function App() {
  return (  
    <React.Fragment>
  <Navbar />

  <Route path="/home" exact>
    <Home />
  </Route>

  <Route path="/login" exact>
    <Login />
  </Route>

  <Redirect to="/home"></Redirect>
  
  </React.Fragment>
  );
}

export default App;
