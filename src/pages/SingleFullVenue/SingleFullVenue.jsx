import React from "react";

import axios from "axios";
import moment from "moment";
import swal from "sweetalert";

import { connect } from "react-redux";

import "./SingleFullVenue.css";

import Point from "./Point";
import Login from "../../utility/Login/Login";

import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";

class SingleFullVenue extends React.Component {
  state = {
    singleVenue: {},
    points: [],
    checkIn: "",
    checkOut: "",
    numberOfGuests: "1",
  };

  async componentDidMount() {
    const vId = this.props.match.params.vid;
    const url = `${window.apiHost}/venue/${vId}`;
    const axiosResponse = await axios.get(url);
    const singleVenue = axiosResponse.data;

    const pointsUrl = `${window.apiHost}/points/get`;
    const pointsAxiosResponse = await axios.get(pointsUrl);

    const points = singleVenue.points.split(",").map((point, i) => {
      return (
        <Point key={i} pointDesc={pointsAxiosResponse.data} point={point} />
      );
    });
    this.setState({
      singleVenue,
      points,
    });
  }

  changeNumberOfGuests = (e) => {
    this.setState({
      numberOfGuests: e.target.value,
    });
  };

  changeCheckIn = (e) => {
    this.setState({
      checkIn: e.target.value,
    });
  };

  changeCheckOut = (e) => {
    this.setState({
      checkOut: e.target.value,
    });
  };

  reserveNow = (e) => {
    console.log("User wants to reserve");
    const startDayMoment = moment(this.state.checkIn);
    const endDayMoment = moment(this.state.checkOut);
    const diffDays = endDayMoment.diff(startDayMoment, "days");
    if (diffDays < 1) {
      //checkin date must be before checkout date
      swal({
        title: "Check-Out date must be after Check-In date",
        icon: "error",
      });
    } else if (isNaN(diffDays)) {
      swal({
        title: "Please, choose the dates",
        icon: "error",
      });
    } else {
      // diffdays is a valid number
      const pricePerNight = this.state.singleVenue.pricePerNight;
      const totalPrice = pricePerNight * diffDays;
      console.log(totalPrice);
    }
  };

  render() {
    console.log(this.state.singleVenue);
    const {
      amenities,
      details,
      guests,
      imageUrl,
      location,
      pricePerNight,
      rating,
      title,
      // uid,
      // id,
    } = this.state.singleVenue;
    return (
      <div className="row single-venue">
        <div className="col s12 center">
          <img src={imageUrl} alt="venue-img" />
        </div>
        <div className="col s8 location-details offset-s2">
          <div className="col s8 left-details">
            <div className="section">
              <div className="location">{location}</div>
              <div className="title"> {title} </div>
              <div className="guests"> {guests} guests</div>
              <div className="divider" />
            </div>
            <div className="section">
              <div className="points">{this.state.points}</div>
              <div className="divider"></div>
            </div>
            <div className="section">
              <div className="details">{details}</div>
              <div className="divider" />
            </div>
            <div className="section">
              <div className="ameneties">{amenities}</div>
            </div>
          </div>
          <div className="col s4 right-details">
            <div className="price-per-day">
              ${pricePerNight} <span>per day</span>
            </div>
            <div className="rating">{rating}</div>
            <div className="col s6">
              Check-In
              <input
                type="date"
                onChange={this.changeCheckIn}
                value={this.state.checkIn}
              />
            </div>
            <div className="col s6">
              Check-Out
              <input
                type="date"
                onChange={this.changeCheckOut}
                value={this.state.checkOut}
              />
            </div>
            <div className="col s12">
              <select
                className="browser-default"
                onChange={this.changeNumberOfGuests}
                value={this.state.numberOfGuests}
              >
                <option value="1">1 Guest</option>
                <option value="1">2 Guest</option>
                <option value="1">3 Guest</option>
                <option value="1">4 Guest</option>
                <option value="1">5 Guest</option>
                <option value="1">6 Guest</option>
                <option value="1">7 Guest</option>
                <option value="1">8 Guest</option>
              </select>
            </div>
            <div className="col s12 center">
              {this.props.auth.token ? (
                <button onClick={this.reserveNow} className="btn">
                  Reserve Now
                </button>
              ) : (
                <button
                  onClick={() => this.props.openModal("open", <Login />)}
                  className="btn"
                >
                  Log in
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFullVenue);
