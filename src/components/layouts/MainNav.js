import { useState } from "react";
import { Link } from "react-router-dom";
import Instructions from "../Instructions";
import Backdrop from "../Backdrop";
import CharcterList from "../CharacterList";

import "./MainNav.scss"


const MainNav = () => {
  const [instructionsIsOpen , SetInstructionsIsOpen] = useState(false);
  const [characteListIsOpen , setCharacterListIsOpen] = useState(false);

  //function to open Instructions and Backdrop Modal Component
  function openInstructions() {
    SetInstructionsIsOpen(true)
  }

  //function to close Instructions and Backdrop Modal Component 
  function closeInstructions() {
    SetInstructionsIsOpen(false)
  }

  function openCharList() {
    setCharacterListIsOpen(true)
  }

  function closeCharList() {
    setCharacterListIsOpen(false)
  }

  return (
    <div className="NavBody">
      <div className="TitleDiv">
        <div className="H1"><Link to="/"><h1>MARVEL</h1></Link></div>
        <div className="H2"><Link to="/"><h2>Character Comparator</h2></Link></div>
      </div>

      <div className="ButtonsAndLinks">
        <button className="btn" onClick={openInstructions}>Instructions</button>
        <button className="btn" onClick={openCharList}>Full Character List</button>
        <ul>
          <li><Link to="/comparator"><h5>Comparator</h5></Link></li>
          <li><Link to="/singlecharacter"><h5>Single Character</h5></Link></li>
          <li><Link to="/futureapp"><h5>Future App</h5></Link></li>
        </ul>
      </div>

      {characteListIsOpen ? <CharcterList onClose={closeCharList}/> : null}
      {instructionsIsOpen ? <Instructions onClose={closeInstructions}/> : null}
      {instructionsIsOpen || characteListIsOpen ? <Backdrop onBackDropInstructions={closeInstructions} onBackdropCharList={closeCharList}/> : null}
    </div>
  );
};

export default MainNav;
