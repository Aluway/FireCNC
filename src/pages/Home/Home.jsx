import React from "react";

import axios from "axios";

import "./Home.css";

import SearchBox from "./SearchBox";
import Spinner from "../../utility/Spinner/Spinner";
import Cities from "../../utility/City/Cities";
import Activities from "../../utility/Activity/Activities";
import Venues from "../../utility/Venue/Venues";
import SuperHosts from "../../utility/Superhost/Superhosts";

class Home extends React.Component {
  state = {
    cities: [],
    europeCities: {},
    asiaCities: {},
    exoticCities: {},
    activities: [],
    recommendedVenues: { venues: [] },
    superhostVenues: { venues: [] },
  };

  async componentDidMount() {
    const recommendedCititesUrl = `${window.apiHost}/cities/recommended`,
      europeCitiesUrl = `${window.apiHost}/cities/europe`,
      asiaCitiesUrl = `${window.apiHost}/cities/asia`,
      exoticCitiesUrl = `${window.apiHost}/cities/exotic`;

    const citiesPromises = [];

    citiesPromises.push(
      axios.get(recommendedCititesUrl),
      axios.get(europeCitiesUrl),
      axios.get(asiaCitiesUrl),
      axios.get(exoticCitiesUrl)
    );

    Promise.all(citiesPromises).then((data) => {
      const recommendedCitites = data[0].data,
        europeCities = data[1].data,
        asiaCities = data[2].data,
        exoticCities = data[3].data;
      this.setState({
        cities: recommendedCitites,
        europeCities,
        asiaCities,
        exoticCities,
      });
    });

    const activitiesUrl = `${window.apiHost}/activities/today`;
    const activities = await axios.get(activitiesUrl);

    this.setState({
      activities: activities.data,
    });

    const recommendedVenuesUrl = `${window.apiHost}/venues/recommended`;
    const recommendedVenues = await axios.get(recommendedVenuesUrl);

    this.setState({
      recommendedVenues: recommendedVenues.data,
    });

    const superhostVenuesUrl = `${window.apiHost}/venues/superHost`;
    const superhostVenues = await axios.get(superhostVenuesUrl);
<<<<<<< HEAD
    console.log(superhostVenues.data);
=======
>>>>>>> master

    this.setState({
      superhostVenues: superhostVenues.data,
    });
  }

  render() {
<<<<<<< HEAD
    console.log(this.state.superhostVenues);
=======
>>>>>>> master
    if (this.state.cities.length === 0) {
      return <Spinner />;
    }

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="home col s12">
              <div className="upper-fold">
<<<<<<< HEAD
                <SearchBox />
=======
                <SearchBox history={this.props.history} />
>>>>>>> master
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid lower-fold">
          <div className="row">
            <div className="col s12">
              <Cities cities={this.state.cities} header="Cities for you" />
            </div>

            <div className="col s12 section-wrapper">
              <Activities
                activities={this.state.activities}
                header="Today in your area"
              />
            </div>

            <div className="col s12">
              <Cities
                cities={this.state.europeCities.cities}
                header={this.state.europeCities.header}
              />
            </div>

            <div className="col s12 section-wrapper">
<<<<<<< HEAD
              <Venues recommendedVenues={this.state.recommendedVenues} />
=======
              <Venues
                venues={this.state.recommendedVenues.venues}
                header="Venues for you"
              />
>>>>>>> master
            </div>

            <div className="col s12">
              <Cities
                cities={this.state.asiaCities.cities}
                header={this.state.asiaCities.header}
              />
            </div>

            <div className="col s12 section-wrapper">
              <SuperHosts superHostVenues={this.state.superhostVenues} />
            </div>

            <div className="col s12">
              <Cities
                cities={this.state.exoticCities.cities}
                header={this.state.exoticCities.header}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
