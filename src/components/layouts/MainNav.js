import { useState } from "react";
import { Link } from "react-router-dom";
import Directions from "../Directions";
import Backdrop from "../Backdrop";


const MainNav = () => {
  const [directionsIsOpen , SetDirectionsIsopen] = useState(false);

  //function to open Directions and Backdrop Modal Component
  function openDirections() {
    SetDirectionsIsopen(true)
  }

  //function to close Directions and Backdrop Modal Component 
  function closeDirections() {
    SetDirectionsIsopen(false)
  }

  return (
    <div>
      <button className="btn" onClick={openDirections}>Instructions</button>
      <ul>
        <li><Link to="/comparator">Comparator</Link></li>
        <li><Link to="/futureapp">Future App</Link></li>
      </ul>
      {directionsIsOpen ? <Directions onClose={closeDirections}/> : null}
      {directionsIsOpen ? <Backdrop onBackdrop={closeDirections}/> : null}
    </div>
  );
};

export default MainNav;
