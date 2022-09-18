
import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Body from "./body/Body";
import Footer from "./body/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;