import React from "react";
import Venue from "./Venue";

import "./Venues.css";

function Venues(props) {
  const recommendedVenues = props.recommendedVenues.venues.map((venue, i) => {
    return (
      <div key={i} className="col s3">
        <Venue venue={venue} />
      </div>
    );
  });

  return (
    <div className="venues">
      <h1 className="venues-header">{props.recommendedVenues.header}</h1>
      <div className="superHostVenues__wrapper">{recommendedVenues}</div>
    </div>
  );
}

export default Venues;
