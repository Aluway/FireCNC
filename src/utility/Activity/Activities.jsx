import React from "react";
import Activity from "./Activity";

import "./Activity.css";

function Activities(props) {
  const activities = props.activities.map((activity, i) => {
    return (
      <div key={i} className="col s2">
        <Activity activity={activity} key={i} />
      </div>
    );
  });
  return (
    <div className="activities">
      <h1 className="activities-header">{props.header}</h1>
      {activities}
    </div>
  );
}
export default Activities;
