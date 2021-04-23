import React from 'react';

import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function Homepage() {
  return (
    <div>
      <div className="card" style={{width: "35rem"}}>
       <img src={beers} className="card-img-top" alt="..."/>
       <div className="card-body">
       <h5 className="card-title">All Beers</h5>
       <p className="card-text">All beers.</p>
       <a href="/beers" className="btn btn-primary">Details</a>
      </div>
    </div>

    <div className="card" style={{width: "35rem"}}>
       <img src={randomBeer} className="card-img-top" alt="..."/>
       <div className="card-body">
       <h5 className="card-title">Random Beer</h5>
       <p className="card-text">Random Beer.</p>
       <a href="/beers/random" className="btn btn-primary">Details</a>
      </div>
    </div>

    <div className="card" style={{width: "35rem"}}>
       <img src={newBeer} className="card-img-top" alt="..."/>
       <div className="card-body">
       <h5 className="card-title">New Beer</h5>
       <p className="card-text">New Beer.</p>
       <a href="#" className="btn btn-primary">Details</a>
      </div>
    </div>
    </div>
  );
}

export default Homepage;
