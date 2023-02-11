import './App.css';
import React, { Fragment } from "react";
import Navbar from './Components/Header/Header';
import Car from './Components/Carousel/Carousel';
import Moto from './Components/Quote/Quote';
import About from './Components/AboutUs/AboutUs';
import Miss from './Components/MissionVission/MissViss';
import Foot from './Components/Footer/Footer';
import Service from './Components/Services/Services';
import Sub from './Components/SubWise_Prac/SubWise';

function App() {
  return (
    <Fragment>
    <Navbar/>
    <Car/>
    <Moto/>
    <About/>
    <Miss/>
    <Service/>
    <Sub/>
    <Foot/>
    </Fragment>
  );
}

export default App;