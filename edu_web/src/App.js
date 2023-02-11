import './App.css';
import React, { Fragment } from "react";
import Navbar from './Components/Header/Header';
import Car from './Components/Carousel/Carousel';
import Moto from './Components/Quote/Quote';
import About from './Components/AboutUs/AboutUs';
import Miss from './Components/MissionVission/MissViss';

function App() {
  return (
    <Fragment>
    <Navbar/>
    <Car/>
    <Moto/>
    <About/>
    <Miss/>
    </Fragment>
  );
}

export default App;