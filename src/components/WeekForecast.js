import React, { Component } from 'react';
import DayForecast from './DayForecast';
import './WeekForecast.css';

export default class WeekForecast extends Component {
  render() {
    return (
      <div className="WeekForecast">
      {
        this.props.forecasts.map((forecast, index) => (
        <DayForecast key={index} forecast={forecast}/>
      ))
      }
      </div>
    );
  }
}
