import React, { Component } from 'react';
import './DayForecast.css';

export default class DayForecast extends Component {
  render() {
      const forecast = this.props.forecast;
      const { dateTimeISO, maxTempF, minTempF, icon} = forecast ? forecast : {};
      const dateString = dateTimeISO ? dateTimeISO.slice(0, 10) : "";
      const iconURL  = icon ? process.env.PUBLIC_URL + '/icons/' + icon : "";

    return (
      <div className="DayForecast">
        <p className="DayForecast-intro">{dateString}</p>
        <img src={iconURL} alt={icon} />
        <p>High: {maxTempF}˚F</p>
        <p>Low: {minTempF}˚F</p>
      </div>
    );
  }
}
