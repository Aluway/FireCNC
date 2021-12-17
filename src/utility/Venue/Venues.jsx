import React from "react";
import Venue from "./Venue";

import "./Venues.css";

function Venues(props) {
<<<<<<< HEAD
  const recommendedVenues = props.recommendedVenues.venues.map((venue, i) => {
=======
  const recommendedVenues = props.venues.map((venue, i) => {
>>>>>>> master
    return (
      <div key={i} className="col s3">
        <Venue venue={venue} />
      </div>
    );
  });

  return (
    <div className="venues">
<<<<<<< HEAD
      <h1 className="venues-header">{props.recommendedVenues.header}</h1>
=======
      <h1 className="venues-header">{props.header}</h1>
>>>>>>> master
      <div className="superHostVenues__wrapper">{recommendedVenues}</div>
    </div>
  );
}

export default Venues;
