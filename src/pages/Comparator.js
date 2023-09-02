import { useState } from "react";
import Char1SearchForm from "../components/Char1Search";

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
    <div>
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
          <h2>Name: {selectedCharacter?.name}</h2>
          <h3>Combat: {selectedCharacter?.powerstats?.combat}</h3>
          <h3>power: {selectedCharacter?.powerstats?.power}</h3>
          <h3>strength: {selectedCharacter?.powerstats?.strength}</h3>
          <h3>speed: {selectedCharacter?.powerstats?.speed}</h3>
          <h3>durability: {selectedCharacter?.powerstats?.durability}</h3>
          <h3>intelligence: {selectedCharacter?.powerstats?.intelligence}</h3>
          <img src={selectedCharacter?.image?.url} atl="Image of Character"/>
      </div>

    </div>
  );
};

export default Comparator;
