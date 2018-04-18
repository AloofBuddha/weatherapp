import React, { Component } from 'react';
import './App.css';
import DayForecast from './DayForecast';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather App</h1>
        </header>
        <DayForecast />
      </div>
    );
  }
}
