import React from "react";

import "./SearchBox.css";

class SearchBox extends React.Component {
  state = {
    where: "",
    checkIn: "",
    checkOut: "",
    guests: 0,
  };

  changeWhere = (e) => {
    this.setState({ where: e.target.value });
  };
  changeCheckIn = (e) => {
    this.setState({ checkIn: e.target.value });
  };
  changeCheckOut = (e) => {
    this.setState({ checkOut: e.target.value });
  };
  changeGuests = (e) => {
    this.setState({ guests: e.target.value });
  };

  render() {
    return (
      <div className="home-search-box col m4">
        <h1>Book awful places to stay and boring things to do.</h1>
        <div className="form">
          <form className="search-box-form">
            <div className="col m12">
              <div className="input-field" id="where">
                <input
                  onChange={this.changeWhere}
                  // placeholder="To hell"
                  value={this.state.where}
                  type="text"
                ></input>
                <label htmlFor="where">Where?</label>
              </div>
            </div>
            <div className="col m6">
              <div className="input-field" id="check-in">
                <input
                  onChange={this.changeCheckIn}
                  // placeholder="To hell"
                  value={this.state.checkIn}
                  type="date"
                ></input>
                <label htmlFor="where">Check-in</label>
              </div>
            </div>
            <div className="col m6">
              <div className="input-field" id="check-out">
                <input
                  onChange={this.changeCheckOut}
                  // placeholder="To hell"
                  value={this.state.checkOut}
                  type="date"
                ></input>
                <label htmlFor="where">Check-out</label>
              </div>
            </div>
            <div className="col m12">
              <div className="range-field" id="guests">
                <label htmlFor="guests">Guests</label>
                <input
                  min="0"
                  max="10"
                  onChange={this.changeGuests}
                  // placeholder="To hell"
                  value={this.state.guests}
                  type="range"
                ></input>
                <span>Number of guests: {this.state.guests}</span>
              </div>
            </div>
            <button
              className="col s6 offset-s6 waves-effect waves-light btn-large"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBox;
