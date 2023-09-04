import { useState } from "react";
import Char1SearchForm from "../components/Char1Search";
import Char2SearchForm from "../components/Char2Search";

import './Comparator.scss';



const Comparator = (props) => {
  //Only searched character is put in this state
  const [selectedCharacter1, setSelectedCharacter1] = useState([]);
  const [selectedCharacter2, setSelectedCharacter2] = useState([]);

  //Creates an Array to hold names for Button Selection
  let listOfNames1 = [];
  for(let i=0; i<props.charData1?.length; i++) {
    listOfNames1.push(props.charData1[i].name)
  }

  let listOfNames2 = [];
  for(let i=0; i<props.charData2?.length; i++) {
    listOfNames2.push(props.charData2[i].name)
  }

  //Function to be called when listOfNames button is clicked
  const selectCharacter1FromList = (e) => {
    e.preventDefault();
    setSelectedCharacter1(props.charData1[e.target.value]);
    props.setUrl1(props.baseURL+e.target.innerText)
  };

  const selectCharacter2FromList = (e) => {
    e.preventDefault();
    setSelectedCharacter2(props.charData2[e.target.value]);
    props.setUrl2(props.baseURL+e.target.innerText)
  };

  return (
    <div className="ComparatorBody">
      <h1>Compare Two Superheros</h1>

      <div className="Hero1">
        <Char1SearchForm
          submitName1Input={props.submitName1Input}
          setSelectedCharacter1={setSelectedCharacter1}
          baseURL={props.baseURL}
          setUrl1={props.setUrl1}
          charData1={props.charData1}
        />

        {listOfNames1.map((name, idx) => (
          <button key={idx} value={idx} onClick={selectCharacter1FromList}>
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

      <div className="Hero2">
        <Char2SearchForm
          submitName2Input={props.submitName2Input}
          setSelectedCharacter2={setSelectedCharacter2}
          baseURL={props.baseURL}
          setUrl2={props.setUrl2}
          charData2={props.charData2}
        />

        {listOfNames2.map((name, idx) => (
          <button key={idx} value={idx} onClick={selectCharacter2FromList}>
            {name}
          </button>
        ))}

        <div>
          <h3>Name:</h3><h4>{selectedCharacter2?.name}</h4>
          <h3>Combat:</h3><h4>{selectedCharacter2?.powerstats?.combat}</h4>
          <h3>power:</h3><h4>{selectedCharacter2?.powerstats?.power}</h4>
          <h3>strength:</h3><h4>{selectedCharacter2?.powerstats?.strength}</h4>
          <h3>speed:</h3><h4>{selectedCharacter2?.powerstats?.speed}</h4>
          <h3>durability:</h3><h4>{selectedCharacter2?.powerstats?.durability}</h4>
          <h3>intelligence:</h3><h4>{selectedCharacter2?.powerstats?.intelligence}</h4>
          <img src={selectedCharacter2?.image?.url} alt={selectedCharacter2?.name}/>
        </div>
      </div>


    </div>
  );
};

export default Comparator;
