import React, { Component } from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Footer from './components/Footer';
import API_KEY from './services/api';

import './styles/Global.css'

export default class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined, 
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
    const data = await api_call.json();

   if(city && country) {
      // Analisando o JSON do console.log(data) localiza-se o caminho das propriedades
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    });
   } else {
     this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined, 
      description: undefined,
      error: "Please enter the values."
     });
   }
  } 

  render() {
    return(
      <div className="app">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
        <div className="divider" />
        <Footer />
      </div>
    )
  }
}