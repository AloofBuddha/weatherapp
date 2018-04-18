import React, { Component } from 'react';
import './DayForecast.css';

export default class DayForecast extends Component {
  render() {
      const {forecast, showCelcius} = this.props;

      const { 
        dateTimeISO, 
        maxTempF, 
        minTempF, 
        maxTempC,
        minTempC,
        icon
      } = forecast ? forecast : {};
      const dateString = dateTimeISO ? dateTimeISO.slice(0, 10) : "";
      const iconURL  = icon ? process.env.PUBLIC_URL + '/icons/' + icon : "";
      const maxTempStr = "High: " + (showCelcius ? maxTempC + "˚C" : maxTempF + "˚F");
      const lowTempStr = "Low: " + (showCelcius ? minTempC + "˚C" : minTempF + "˚F");


    return (
      <div className="DayForecast">
        <p className="DayForecast-intro">{dateString}</p>
        <img src={iconURL} alt={icon} />
        <p>{maxTempStr}</p>
        <p>{lowTempStr}</p>
        
      </div>
    );
  }
}
