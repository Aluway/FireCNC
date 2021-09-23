import React from "react";

import SuperHost from "./Superhost";

import "./Superhosts.css";

function SuperHosts(props) {
  const superHost = props.superHostVenues.venues.map((venue, i) => {
    return (
      <div key={i} className="col s3">
        <SuperHost superHostVenue={venue} />
      </div>
    );
  });

  return (
    <div className="superHostVenues">
      <h1 className="superHostVenues-header">{props.superHostVenues.header}</h1>
      <div className="superHostVenues__wrapper">{superHost}</div>
    </div>
  );
}

export default SuperHosts;
