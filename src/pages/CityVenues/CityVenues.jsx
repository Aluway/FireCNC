import React, { useState, useEffect } from "react";

import "./CityVenues.css";
import axios from "axios";

import Spinner from "../../utility/Spinner/Spinner";
import Venues from "../../utility/Venue/Venues";

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
}

export default CityVenues;
