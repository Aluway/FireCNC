import React from "react";
import City from "./City";
import Slider from "../Slider/Slider";

import "./Cities.css";

function Cities(props) {
  const recCities = props.cities.map((city, i) => {
    return (
      <div className="col s3" key={i}>
        <City city={city} />
      </div>
    );
  });
  return (
    <div className="cities">
      <h2 className="cities-header">{props.header}</h2>
      <Slider elements={recCities} />
    </div>
  );
}

export default Cities;
