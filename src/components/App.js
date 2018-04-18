import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import secrets from '../secrets.json';
import DayForecast from './DayForecast';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { forecasts: [] }
    this.getForecasts = this.getForecasts.bind(this);
    this.getForecasts();
  }

  render() {
    console.log(this.state.forecasts);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather App</h1>
        </header>
        <p></p>
        <DayForecast />
      </div>
    );
  }

  async getForecasts() {
    const aeris_url = 'http://api.aerisapi.com/forecasts/11101?' + 
                      `client_id=${secrets.aeris.CLIENT_ID}` +
                      `&client_secret=${secrets.aeris.CLIENT_SECRET}`;
    
    const response = await axios.get(aeris_url);
    let forecasts = response.data.response[0].periods;

    forecasts = forecasts.map(({ dateTimeISO, minTempF, maxTempF}) => {
      return { dateTimeISO, minTempF, maxTempF };
    });

    this.setState( { forecasts });
  }
}
