import { useState } from "react";
import Char1SearchForm from "../components/Char1Search";

import "./SingleCharacter.scss";

const SingleCharacter = (props) => {
  //Only searched character is put in this state
  const [selectedCharacter1, setSelectedCharacter1] = useState([]);

  //Creates an Array to hold names for Button Selection
  let listOfNames = [];
  for (let i = 0; i < props.charData1?.length; i++) {
    listOfNames.push(props.charData1[i].name);
  }

  //Function to be called when listOfNames button is clicked
  const selectCharacterFromList = (e) => {
    e.preventDefault();
    setSelectedCharacter1(props.charData1[e.target.value]);
    props.setUrl1(props.baseURL + e.target.innerText);
  };

  return (
    <div className="ComparatorBody">
      <h1>Single Superhero</h1>
      <h3>Look up a single Superhero</h3>

      <Char1SearchForm
        submitName1Input={props.submitName1Input}
        setSelectedCharacter1={setSelectedCharacter1}
        baseURL={props.baseURL}
        setUrl1={props.setUrl1}
        charData1={props.charData1}
      />
 
      {listOfNames.map((name, idx) => (
        <button key={idx} value={idx} onClick={selectCharacterFromList}>
          {name}
        </button>
      ))}

        <div>
          <h3>Name:</h3><h4>{selectedCharacter1?.name}</h4>
          <h3>Combat:</h3><h4>{selectedCharacter1?.powerstats?.combat}</h4>
          <h3>power:</h3><h4>{selectedCharacter1?.powerstats?.power}</h4>
          <h3>strength:</h3><h4>{selectedCharacter1?.powerstats?.strength}</h4>
          <h3>speed:</h3><h4>{selectedCharacter1?.powerstats?.speed}</h4>
          <h3>durability:</h3><h4>{selectedCharacter1?.powerstats?.durability}</h4>
          <h3>intelligence:</h3><h4>{selectedCharacter1?.powerstats?.intelligence}</h4>
          <img src={selectedCharacter1?.image?.url} alt={selectedCharacter1?.name}/>
      </div>

    </div>
  );
};

export default SingleCharacter;
