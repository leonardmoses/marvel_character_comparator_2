import { useState } from "react";
import Char1SearchForm from "../components/Char1Search";

import './Comparator.scss';


const Comparator = (props) => {
  //Only searched character is put in this state
  const [selectedCharacter, setSelectedCharacter] = useState([]);

  //Creates an Array to hold names for Button Selection
  let listOfNames = [];
  for(let i=0; i<props.charData?.length; i++) {
    listOfNames.push(props.charData[i].name)
  }

  //Function to be called when listOfNames button is clicked
  const selectCharacterFromList = (e) => {
    e.preventDefault();
    setSelectedCharacter(props.charData[e.target.value]);
    props.setUrl(props.baseURL+e.target.innerText)
  };

  return (
    <div className="ComparatorBody">
      <h1>{props.charData?[0].name : 'Superhero'}</h1>

      <Char1SearchForm
        submitName1Input={props.submitName1Input}
        setSelectedCharacter={setSelectedCharacter}
        baseURL={props.baseURL}
        setUrl={props.setUrl}
        charData={props.charData}
      />
 
      {listOfNames.map((name, idx) => (
        <button key={idx} value={idx} onClick={selectCharacterFromList}>
          {name}
        </button>
      ))}

        <div>
          <h3>Name:</h3><h4>{selectedCharacter?.name}</h4>
          <h3>Combat:</h3><h4>{selectedCharacter?.powerstats?.combat}</h4>
          <h3>power:</h3><h4>{selectedCharacter?.powerstats?.power}</h4>
          <h3>strength:</h3><h4>{selectedCharacter?.powerstats?.strength}</h4>
          <h3>speed:</h3><h4>{selectedCharacter?.powerstats?.speed}</h4>
          <h3>durability:</h3><h4>{selectedCharacter?.powerstats?.durability}</h4>
          <h3>intelligence:</h3><h4>{selectedCharacter?.powerstats?.intelligence}</h4>
          <img src={selectedCharacter?.image?.url} alt={selectedCharacter?.name}/>
      </div>

    </div>
  );
};

export default Comparator;
