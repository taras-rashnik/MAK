import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import MainContainer from './Flux/MainContainer';
import Layout from './main_page/layout';
import Test1 from './test_pages/test1';
import TestLinks from './test_pages/test_links';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={TestLinks}/>
            <Route path='/test1' component={Test1}/>
            <Route path='/layout' component={Layout}/>
            <Route path='/main' component={MainContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
