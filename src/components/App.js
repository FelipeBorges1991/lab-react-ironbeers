import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './HomePage';
import AllBeers from './AllBeers';
import Beer from './Beer'
import Random from './Random';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/beers/:id" component={Beer} />
        <Route exact path="/beers/random-beer" component={Random} />
      </BrowserRouter>
    </div>
  );
}

export default App;
