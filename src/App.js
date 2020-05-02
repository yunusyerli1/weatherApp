import React from 'react';
import Home from './Home';


const API_KEY = "57981e5e7773e04207c79c0c9733417a";

class App extends React.Component{
    state = {
        temrature : "",
        city : "",
        country:"",
        humidity:"",
        description:"",
        error:""
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        if(city || country){
        console.log(data);
        this.setState({
            temprature : data.main.temp,
            humidity:data.main.humidity,
            city : data.name,
            country:data.sys.country,
            description:data.weather[0].description
        });
        }else {
            this.setState({
                temrature : "",
                city : "",
                country:"",
                humidity:"",
                description:"",
                error:"Please enter city and country information"
            });
        }
    }
    render(){
    return (
        <div>
            <Home weather={this.state} getWeather={this.getWeather}/>
        </div>
    )
}
}
export default App;
