import React from "react";
import { Link } from "react-router-dom";

import "./Venue.css";

class Venue extends React.Component {
  render() {
    const { id, title, location, rating, pricePerNight, imageUrl } =
      this.props.venue;
    return (
      <div className="venue col s12">
        <Link to={`/venue/${id}`}>
          <div className="image">
            <img src={imageUrl} alt="venue-img" />
          </div>
          <div className="rating-location-wrapper">
            <div className="location">{location}</div>
            <div className="rating">
              <i className="material-icons rating-icon">star</i>
              {rating}
            </div>
          </div>
          <div className="title">{title}</div>
          <div className="price">${pricePerNight}/night</div>
        </Link>
      </div>
    );
  }
}

export default Venue;
