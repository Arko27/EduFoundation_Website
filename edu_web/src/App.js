import './App.css';
import React, { Fragment } from "react";
import Navbar from './Components/Header/Header';
import Car from './Components/Carousel/Carousel';

function App() {
  return (
    <Fragment>
    <Navbar/>
    <Car/>
    </Fragment>
  );
}

export default App;