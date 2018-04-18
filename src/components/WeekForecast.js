import React, { Component } from 'react';
import DayForecast from './DayForecast';
import './WeekForecast.css';

export default class WeekForecast extends Component {
  render() {
    const {forecasts, showCelcius} = this.props;

    return (
      <div className="WeekForecast">
      {
        forecasts.map((forecast, index) => (
        <DayForecast key={index} forecast={forecast} showCelcius={showCelcius}/>
      ))
      }
      </div>
    );
  }
}
