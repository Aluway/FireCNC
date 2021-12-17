import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import { Route } from "react-router";

import Bookings from "./Bookings";
import AccountSideBar from "./AccountSideBar";
import ChangePassword from "./ChangePassword";

import "./Account.css";

function Account(props) {
  const token = useSelector((state) => state.auth.token);

  const [pastBookings, setPastBookings] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);

  useEffect(() => {
    const accountUrl = `${window.apiHost}/users/getBookings`;
    const data = {
      token: token,
    };
    const fetchAccountData = async () => {
      const resp = await axios.post(accountUrl, data);

      let pastBookings = [],
        upcomingBookings = [];

      resp.data.forEach((booking) => {
        const today = moment(); //today's date
        const checkOutDate = moment(booking.checkOut);
        const diffDays = checkOutDate.diff(today, "days");
        if (diffDays < 0) {
          pastBookings.push(booking);
        } else {
          upcomingBookings.push(booking);
        }
      });

      setPastBookings(pastBookings);
      setUpcomingBookings(upcomingBookings);
    };
    fetchAccountData();
  }, [token]);

  return (
    <div className="account container-fluid">
      <AccountSideBar />
      <div className="row">
        <div className="col s8 offset-s3">
          <Route
            exact
            path="/account"
            render={() => <h1>Choose an option on the left</h1>}
          />
          <Route exact path="/account/reservations/confirmed">
            <Bookings
              type="upcoming"
              bookings={upcomingBookings}
              token={token}
            />
          </Route>
          <Route exact path="/account/reservations/past">
            <Bookings type="past" bookings={pastBookings} />
          </Route>
          <Route
            exact
            path="/account/change-pass"
            component={ChangePassword}
          ></Route>
        </div>
      </div>
    </div>
  );
}

// export default connect(mapStateToProps)(Account);
export default Account;
