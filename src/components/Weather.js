import React from 'react';

import './Weather.css';

export default function Weather(props) {
    return (
      <ul>
        {props.city && props.country && 
        <li><span>Location:</span> {props.city}, {props.country}</li>}

        {props.temperature &&
        <li><span>Temperature:</span> {props.temperature}</li>}

        {props.humidity && 
        <li><span>Humidity:</span> {props.humidity}</li>}

        { props.description && 
        <li><span>Conditions:</span> {props.description}</li>}

        { props.error &&
        <li><span>{props.error}</span></li>}
      </ul>
    )
  }