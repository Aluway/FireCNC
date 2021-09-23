import React from "react";
import { Link } from "react-router-dom";

import "./Superhost.css";

class SuperHost extends React.Component {
  render() {
    const { id, title, location, rating, pricePerNight, imageUrl } =
      this.props.superHostVenue;
    return (
      <div className="superHost col s12">
        <Link to={`/superhost/${id}`}>
          <div className="image">
            <img src={imageUrl} alt="superhost-img" />
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

export default SuperHost;
