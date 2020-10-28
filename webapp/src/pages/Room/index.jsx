import React from "react";
import "./Room.css"

import Appbar from "../../components/Appbar";
import Info from "../../components/Info";
import Chart from "../../components/Chart";

const Room = () => {
  return (
    <div className="root-container">
      <Appbar />
      <div className="root-content">
        <Info/>
        <Chart />
      </div>
    </div>
  );
};

export default Room;
