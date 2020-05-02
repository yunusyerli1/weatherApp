import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

 class Home extends Component {
    render() {
        const {weather, getWeather} = this.props;
        return (
            <div>
               <div className="wrapper">
                   <div className="main">
                       <div className="container">
                           <div className="row">
                               <div className="col-xs-5 title-container">
                                    <Titles />
                               </div>
                               <div className="col-xs-7 form-container">
                                    <Form getWeather={getWeather}/>
                                    <Weather weather = {weather}/>
                               </div>
                           </div>
                       </div>
                   </div>
               </div> 
            </div>
        )
    }
}
export default Home;


                