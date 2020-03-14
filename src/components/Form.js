import React from 'react';

import './Form.css'

export default function Form(props) {
    return (
      <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button>Get Weather!</button>
      </form>
    )
  }