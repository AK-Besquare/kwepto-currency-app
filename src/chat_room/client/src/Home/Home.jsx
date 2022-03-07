import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  // const [roomName, setRoomName] = React.useState("");

  // const handleRoomNameChange = (event) => {
  //   setRoomName(event.target.value);
  // };

  return (
    <div>
      <div className="home-container">
        {/* <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      /> */}
        <Link to={`/bitcoin`} className="enter-room-button">
          Join Bitcoin Room
        </Link>
        <Link to={`/ethereum`} className="enter-room-button">
          Join Ethereum Room
        </Link>
        <Link to={`/shiba`} className="enter-room-button">
          Join Shiba Room
        </Link>
      </div>
    </div>
  );
};

export default Home;
