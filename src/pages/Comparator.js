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
      <h3>Vs</h3>

      <div className="ComparatorContent">

        <div className="Hero1">
          <Char1SearchForm
            submitName1Input={props.submitName1Input}
            setSelectedCharacter1={setSelectedCharacter1}
            baseURL={props.baseURL}
            setUrl1={props.setUrl1}
            charData1={props.charData1}
          />
          <div className="ListOfNames1">
            {listOfNames1.map((name, idx) => (
              <button key={idx} value={idx} onClick={selectCharacter1FromList}>
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
              <div className="Name1"><h4>{selectedCharacter1?.name ? selectedCharacter1?.name : "Alias"}</h4></div>
              <div className="FullName1"><h4>{selectedCharacter1?.biography?.["full-name"] ? selectedCharacter1?.biography?.["full-name"] : "Full Name"}</h4></div>

              <div className="Stats">
                <h4>Power Stats</h4>
                <h5 className="InfoType">Combat:</h5><h5 className="InfoValue">{selectedCharacter1?.powerstats?.combat}</h5>
                <h5 className="InfoType">Power:</h5><h5 className="InfoValue">{selectedCharacter1?.powerstats?.power}</h5>
                <h5 className="InfoType">Strength:</h5><h5 className="InfoValue">{selectedCharacter1?.powerstats?.strength}</h5>
                <h5 className="InfoType">Speed:</h5><h5 className="InfoValue">{selectedCharacter1?.powerstats?.speed}</h5>
                <h5 className="InfoType">Durability:</h5><h5 className="InfoValue">{selectedCharacter1?.powerstats?.durability}</h5>
                <h5 className="InfoType">Intelligence:</h5><h5 className="InfoValue">{selectedCharacter1?.powerstats?.intelligence}</h5>
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

        <div className="Hero2">
          <Char2SearchForm
            submitName2Input={props.submitName2Input}
            setSelectedCharacter2={setSelectedCharacter2}
            baseURL={props.baseURL}
            setUrl2={props.setUrl2}
            charData2={props.charData2}
          />

          <div className="ListOfNames2">
            {listOfNames2.map((name, idx) => (
              <button key={idx} value={idx} onClick={selectCharacter2FromList}>
                {name}
              </button>
            ))}
          </div>


          <div className="CharacterData">
            <div className="ImageBackground">
              <div className="ImageContainer">
                <img src={selectedCharacter2?.image?.url ? selectedCharacter2?.image?.url: "https://www.superherodb.com/gallery2/075/452/45242.webp"} alt={selectedCharacter2?.name}/>
              </div>
            </div>
            <div className="CharacterInfo">
              <div className="Name2"><h4>{selectedCharacter2?.name ? selectedCharacter2?.name : "Alias"}</h4></div>
              <div className="FullName2"><h4>{selectedCharacter2?.biography?.["full-name"] ? selectedCharacter2?.biography?.["full-name"] : "Full Name"}</h4></div>
              <div className="Stats">
                <h4>Power Stats</h4>
                <h5 className="InfoType">Combat:</h5><h5 className="InfoValue">{selectedCharacter2?.powerstats?.combat}</h5>
                <h5 className="InfoType">Power:</h5><h5 className="InfoValue">{selectedCharacter2?.powerstats?.power}</h5>
                <h5 className="InfoType">Strength:</h5><h5 className="InfoValue">{selectedCharacter2?.powerstats?.strength}</h5>
                <h5 className="InfoType">Speed:</h5><h5 className="InfoValue">{selectedCharacter2?.powerstats?.speed}</h5>
                <h5 className="InfoType">Durability:</h5><h5 className="InfoValue">{selectedCharacter2?.powerstats?.durability}</h5>
                <h5 className="InfoType">Intelligence:</h5><h5 className="InfoValue">{selectedCharacter2?.powerstats?.intelligence}</h5>
              </div>

              <div className="Bio">
                <h4>Appearance</h4>
                <h5 className="InfoType">Gender:</h5><h5 className="InfoValue">{selectedCharacter2?.appearance?.gender}</h5>
                <h5 className="InfoType">Height:</h5><h5 className="InfoValue">{selectedCharacter2?.appearance?.height}</h5>
                <h5 className="InfoType">Weight:</h5><h5 className="InfoValue">{selectedCharacter2?.appearance?.weight}</h5>
                <h5 className="InfoType">Eye Color:</h5><h5 className="InfoValue">{selectedCharacter2?.appearance?.["eye-color"]}</h5>
                <h5 className="InfoType">Hair Color:</h5><h5 className="InfoValue">{selectedCharacter2?.appearance?.["hair-color"]}</h5>
                <h5 className="InfoType">Race:</h5><h5 className="InfoValue">{selectedCharacter2?.appearance?.race}</h5>
              </div>

              <div className="Intel">
                <h4>Intel</h4>
                <h5 className="InfoType">Place of birth:</h5><h5 className="InfoValue">{selectedCharacter2?.biography?.["place-of-birth"]}</h5>
                <h5 className="InfoType">Percieved Moral Alignment:</h5><h5 className="InfoValue">{selectedCharacter2?.biography?.alignment}</h5>
                <h5 className="InfoType">Aliases:</h5><h5 className="InfoValue">{selectedCharacter2?.biography?.aliases}</h5>
                <h5 className="InfoType">Alter Egos:</h5><h5 className="InfoValue">{selectedCharacter2?.biography?.["alter-egos"]}</h5>
                <h5 className="InfoType">Relatives:</h5><h5 className="InfoValue">{selectedCharacter2?.connections?.relatives}</h5>
                <h5 className="InfoType">Group Affliations:</h5><h5 className="InfoValue">{selectedCharacter2?.connections?.["group-affiliation"]}</h5>
                <h5 className="InfoType">Occupations:</h5><h5 className="InfoValue">{selectedCharacter2?.work?.occupation}</h5>
                <h5 className="InfoType">Base of Operations:</h5><h5 className="InfoValue">{selectedCharacter2?.work?.base}</h5>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Comparator;
