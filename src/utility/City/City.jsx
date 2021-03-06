import React from "react";
import { Link } from "react-router-dom";

import "./City.css";

class City extends React.Component {
  render() {
    const { cityName, image, price, id } = this.props.city;
    return (
      <div key={id} className="city col s12">
        <Link to={`/city/${cityName}`}>
          <div className="image">
            <img src={image} alt="city" />
          </div>
          <div className="city-name">{cityName}</div>
          <div className="price">${price}/night average</div>
        </Link>
      </div>
    );
  }
}
export default City;
