import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./utility/NavBar/NavBar";
import Home from "./pages/Home/Home.jsx";
import SingleFullVenue from "./pages/SingleFullVenue/SingleFullVenue";
import Modal from "./utility/Modal/Modal";
import CityVenues from "./pages/CityVenues/CityVenues";
// import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/venue/:vid" component={SingleFullVenue} />
        <Route path="/" component={Modal} />
        <Route exact path="/city/:cityName" component={CityVenues} />
      </Router>
    );
  }
}

export default App;
