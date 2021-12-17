<<<<<<< HEAD
import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./utility/NavBar/NavBar";
import Home from "./pages/Home/Home.jsx";
import SingleFullVenue from "./pages/SingleFullVenue/SingleFullVenue";
import Modal from "./utility/Modal/Modal";
import CityVenues from "./pages/CityVenues/CityVenues";
=======
import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Spinner from "./utility/Spinner/Spinner";

// import NavBar from "./utility/NavBar/NavBar";
// import Home from "./pages/Home/Home.jsx";
// import SingleFullVenue from "./pages/SingleFullVenue/SingleFullVenue";
// import Modal from "./utility/Modal/Modal";
// import CityVenues from "./pages/CityVenues/CityVenues";
// import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
// import Account from "./pages/Account/Account";
// import Search from "./pages/Search/Search";

const Search = lazy(() => import("./pages/Search/Search"));
const NavBar = lazy(() => import("./utility/NavBar/NavBar"));
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Modal = lazy(() => import("./utility/Modal/Modal"));
const CityVenues = lazy(() => import("./pages/CityVenues/CityVenues"));
const PaymentSuccess = lazy(() =>
  import("./pages/PaymentSuccess/PaymentSuccess")
);
const Account = lazy(() => import("./pages/Account/Account"));
const SingleFullVenue = lazy(() =>
  import("./pages/SingleFullVenue/SingleFullVenue")
);

>>>>>>> master
// import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
<<<<<<< HEAD
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/venue/:vid" component={SingleFullVenue} />
        <Route path="/" component={Modal} />
        <Route exact path="/city/:cityName" component={CityVenues} />
=======
        <Suspense fallback={<Spinner />}>
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/venue/:vid" component={SingleFullVenue} />
          <Route path="/" component={Modal} />
          <Route exact path="/city/:cityName" component={CityVenues} />
          <Route
            exact
            path="/payment-success/:stripeToken"
            component={PaymentSuccess}
          />
          <Route path="/account" component={Account} />
          <Route path="/search/:searchTerm" component={Search} />
        </Suspense>
>>>>>>> master
      </Router>
    );
  }
}

export default App;
