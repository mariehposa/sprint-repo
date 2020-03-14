import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Jokes from './components/jokes';
import Register from './components/register';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/jokes" render={props => privateRoute(Jokes, props)} />
      </div>
    </Router>
  );
}

function privateRoute (Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props}/>
  }
  else {
    return <Redirect to="/"/>
  }
}

export default App;
