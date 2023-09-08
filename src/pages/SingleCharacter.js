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
    <div className="SingleCharacterBody">
      <h3>Single</h3>

      <div className="Hero1">
        <Char1SearchForm
          submitName1Input={props.submitName1Input}
          setSelectedCharacter1={setSelectedCharacter1}
          baseURL={props.baseURL}
          setUrl1={props.setUrl1}
          charData1={props.charData1}
        />
        
        <div className="ListOfNames">
          {listOfNames.map((name, idx) => (
            <button key={idx} value={idx} onClick={selectCharacterFromList}>
              {name}
            </button>
          ))}
        </div>

          <div className="CharacterData">

            <div className="ImageBackground">
              <div className="ImageContainer">
                <img src={selectedCharacter1?.image?.url ? selectedCharacter1?.image?.url: "https://www.superherodb.com/gallery2/075/157/15709.webp"} alt={selectedCharacter1?.name}/>
              </div>
            </div>

            <div className="CharacterInfo">
              <div className="Name"><h4>{selectedCharacter1?.name ? selectedCharacter1?.name : "—"}</h4></div>
            <div className="FullName"><h4>{selectedCharacter1?.biography?.["full-name"] ? selectedCharacter1?.biography?.["full-name"] : "—"}</h4></div>

            <div className="Stats">
              <h4>Power Stats</h4>
              <h5 className="InfoType">Combat:</h5><h5 className="InfoValue">{selectedCharacter1?.powerstats?.combat}</h5>
              <h5 className="InfoType">power:</h5><h5 className="InfoValue">{selectedCharacter1?.powerstats?.power}</h5>
              <h5 className="InfoType">strength:</h5><h5 className="InfoValue">{selectedCharacter1?.powerstats?.strength}</h5>
              <h5 className="InfoType">speed:</h5><h5 className="InfoValue">{selectedCharacter1?.powerstats?.speed}</h5>
              <h5 className="InfoType">durability:</h5><h5 className="InfoValue">{selectedCharacter1?.powerstats?.durability}</h5>
              <h5 className="InfoType">intelligence:</h5><h5 className="InfoValue">{selectedCharacter1?.powerstats?.intelligence}</h5>
            </div>

            <div className="Bio">
              <h4>Appearance</h4>
              <h5 className="InfoType">Gender:</h5><h5 className="InfoValue">{selectedCharacter1?.appearance?.gender}</h5>
              <h5 className="InfoType">Height:</h5><h5 className="InfoValue">{selectedCharacter1?.appearance?.height}</h5>
              <h5 className="InfoType">Weight:</h5><h5 className="InfoValue">{selectedCharacter1?.appearance?.weight}</h5>
              <h5 className="InfoType">Eye Color:</h5><h5 className="InfoValue">{selectedCharacter1?.appearance?.["eye-color"]}</h5>
              <h5 className="InfoType">Hair Color:</h5><h5 className="InfoValue">{selectedCharacter1?.appearance?.["hair-color"]}</h5>
              <h5 className="InfoType">Race:</h5><h5 className="InfoValue">{selectedCharacter1?.appearance?.race}</h5>
            </div>

            <div className="Intel">
              <h4>Intel</h4>
              <h5 className="InfoType">Place of birth:</h5><h5 className="InfoValue">{selectedCharacter1?.biography?.["place-of-birth"]}</h5>
              <h5 className="InfoType">Percieved Moral Alignment:</h5><h5 className="InfoValue">{selectedCharacter1?.biography?.alignment}</h5>
              <h5 className="InfoType">Aliases:</h5><h5 className="InfoValue">{selectedCharacter1?.biography?.aliases}</h5>
              <h5 className="InfoType">Alter Egos:</h5><h5 className="InfoValue">{selectedCharacter1?.biography?.["alter-egos"]}</h5>
              <h5 className="InfoType">Relatives:</h5><h5 className="InfoValue">{selectedCharacter1?.connections?.relatives}</h5>
              <h5 className="InfoType">Group Affliations:</h5><h5 className="InfoValue">{selectedCharacter1?.connections?.["group-affiliation"]}</h5>
              <h5 className="InfoType">Occupations:</h5><h5 className="InfoValue">{selectedCharacter1?.work?.occupation}</h5>
              <h5 className="InfoType">Base of Operations:</h5><h5 className="InfoValue">{selectedCharacter1?.work?.base}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;
