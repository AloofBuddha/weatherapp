import React, { Component } from 'react';
import './DayForecast.css';
import icon from './icons/am_pcloudy.png';

export default class DayForecast extends Component {
  render() {
    return (
      <div className="DayForecast">
        <p className="DayForecast-intro">
            2017-06-09        
        </p>
        <img src={icon} alt="p cloudy" />
        <p>High: 27˚F</p>
        <p>Low: 19˚F</p>
      </div>
    );
  }
}
