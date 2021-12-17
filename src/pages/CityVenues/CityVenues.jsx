<<<<<<< HEAD
import React from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> master

import "./CityVenues.css";
import axios from "axios";

import Spinner from "../../utility/Spinner/Spinner";
import Venues from "../../utility/Venue/Venues";

<<<<<<< HEAD
class CityVenues extends React.Component {
  state = {
    cityVenues: { venues: [] },
  };

  async componentDidMount() {
    const cityName = this.props.match.params.cityName;
    const url = `${window.apiHost}/venues/city/${cityName}`;

    const resp = await axios.get(url, { cityName });
    this.setState({
      cityVenues: resp.data,
    });
  }

  render() {
    console.log(this.state.cityVenues);
    if (!this.state.cityVenues) {
      return <Spinner />;
    }
    return (
      <div className="row">
        <Venues recommendedVenues={this.state.cityVenues} />
      </div>
    );
  }
=======
function CityVenues(props) {
  const [cityVenues, setVenues] = useState({ venues: [] });

  useEffect(() => {
    const fetchVenuesData = async () => {
      const cityName = props.match.params.cityName;
      const url = `${window.apiHost}/venues/city/${cityName}`;
      const resp = await axios.get(url, { cityName });

      setVenues(resp.data);
    };
    fetchVenuesData();
  });

  if (!cityVenues) {
    return <Spinner />;
  }
  return (
    <div className="row">
      <Venues recommendedVenues={cityVenues} />
    </div>
  );
>>>>>>> master
}

export default CityVenues;
