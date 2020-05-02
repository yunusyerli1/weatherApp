import React from 'react';

 const Weather = props => {
        const {temprature, humidity,city, country, description, error} = props.weather;
        return (
            <div className="weather__info">
                { city&&country  &&    <p className="weather__key"> Location: <span className="weather__value">{city} {country}</span></p> }
                { temprature     &&    <p className="weather__key">Temprature: <span className="weather__value">{temprature}°C</span></p> }
                { humidity       &&    <p className="weather__key">Humidity: <span className="weather__value">{humidity}%</span></p> }
                { description    &&    <p className="weather__key">Conditions: <span className="weather__value">{description}</span></p> }
                { error&&!city&&!country   &&    <p className="weather__error"><span>{error}</span></p> }
            </div>
        );
    
}
export default Weather;