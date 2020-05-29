import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DisplayContainer from '../container/DisplayContainer';
import CardItem from './CardItem';
import NavBar from './NavBar';
import Topgainers from './Topgainers';


const App = () => (
  <Router>

    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/topgainers" component={Topgainers} />
        <Route path="/details/:id" component={CardItem} />
        <Route path="/" component={DisplayContainer} />
      </Switch>
    </div>
  </Router>

);

export default App;
