import { useState } from "react";
import { Link } from "react-router-dom";
import Instructions from "../Instructions";
import Backdrop from "../Backdrop";
import CharcterList from "../CharacterList";


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
    <div>
      <button className="btn" onClick={openInstructions}>Instructions</button>
      <button className="btn" onClick={openCharList}>Full Character List</button>
      <ul>
        <li><Link to="/comparator">Comparator</Link></li>
        <li><Link to="/singlecharacter">Single Character Lookup</Link></li>
        <li><Link to="/futureapp">Future App</Link></li>
      </ul>
      {characteListIsOpen ? <CharcterList onClose={closeCharList}/> : null}
      {instructionsIsOpen ? <Instructions onClose={closeInstructions}/> : null}
      {instructionsIsOpen || characteListIsOpen ? <Backdrop onBackDropInstructions={closeInstructions} onBackdropCharList={closeCharList}/> : null}
    </div>
  );
};

export default MainNav;
