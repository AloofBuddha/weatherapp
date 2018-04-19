import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import secrets from './secrets.json';
import DayForecast from './components/DayForecast';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      forecasts: [], 
      showCelcius: false 
    }
    this.getForecasts = this.getForecasts.bind(this);
    this.getForecasts();
  }

  render() {
    const { forecasts, showCelcius } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather App</h1>
        </header>
        <div className="WeekForecast">
        {
          forecasts.map((forecast, index) => (
            <DayForecast key={index} forecast={forecast} showCelcius={showCelcius}/>
          ))
        }
        </div>
        <footer className="App-footer">
          <button type="button" className="App-title" 
            onClick={() => this.setState({ showCelcius: !showCelcius })}>
          Show { showCelcius ? "Farenheit" : "Celcius"}
          </button>
        </footer>
      </div>
    );
  }

  async getForecasts() {
    const aeris_url = 'http://api.aerisapi.com/forecasts/11101?' + 
                      `client_id=${secrets.aeris.CLIENT_ID}` +
                      `&client_secret=${secrets.aeris.CLIENT_SECRET}`;
    
    const response = await axios.get(aeris_url);

    let forecasts = response.data.response[0].periods;

    this.setState( { forecasts });
  }
}
