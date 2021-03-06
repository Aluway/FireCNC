import React, { useState } from "react";

import "./SearchBox.css";

function SearchBox(props) {
  const [where, changeWhere] = useState("");
  const [checkIn, changeCheckIn] = useState("");
  const [checkOut, changeCheckOut] = useState("");
  const [guests, changeGuests] = useState(1);

  const submitSearch = (e) => {
    e.preventDefault();
    props.history.push(`/search/${where}`);
  };

  return (
    <div onSubmit={submitSearch} className="home-search-box col m4">
      <h1>Book awful places to stay and boring things to do.</h1>
      <div className="form">
        <form className="search-box-form">
          <div className="col m12">
            <div className="input-field" id="where">
              <input
                onChange={(e) => changeWhere(e.target.value)}
                // placeholder="To hell"
                value={where}
                type="text"
              ></input>
              <label htmlFor="where">Where?</label>
            </div>
          </div>
          <div className="col m6">
            <div className="input-field" id="check-in">
              <input
                onChange={(e) => changeCheckIn(e.target.value)}
                // placeholder="To hell"
                value={checkIn}
                type="date"
              ></input>
              <label htmlFor="where">Check-in</label>
            </div>
          </div>
          <div className="col m6">
            <div className="input-field" id="check-out">
              <input
                onChange={(e) => changeCheckOut(e.target.value)}
                // placeholder="To hell"
                value={checkOut}
                type="date"
              ></input>
              <label htmlFor="where">Check-out</label>
            </div>
          </div>
          <div className="col m12">
            <div className="range-field" id="guests">
              <label htmlFor="guests">Guests</label>
              <input
                min="1"
                max="10"
                onChange={(e) => changeGuests(e.target.value)}
                // placeholder="To hell"
                value={guests}
                type="range"
              ></input>
              <span>Number of guests: {guests}</span>
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

export default SearchBox;
