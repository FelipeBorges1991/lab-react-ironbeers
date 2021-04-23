import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './NavBar';

// READ do cRud

class Beer extends Component {
  state = {
    Onlybeer: '',
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      );
      console.log(response);
      this.setState({ Onlybeer: { ...response.data } });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="mt-5 text-center container">
          <img src={this.state.Onlybeer.image_url} width="100px"></img>
          <h1>{this.state.Onlybeer.name}</h1>
          <h4>
            {this.state.Onlybeer.tagline} &nbsp;{' '}
            {this.state.Onlybeer.first_brewed}{' '}
          </h4>
          <h5>{this.state.Onlybeer.attenuation_level} </h5>
          <p>{this.state.Onlybeer.description}</p>
          <p>{this.state.Onlybeer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default Beer;
