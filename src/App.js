import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar></AppNavbar>
          <h1> Placeholder </h1> 
        </div>
      </Router>
    );
  }
}

export default App;
