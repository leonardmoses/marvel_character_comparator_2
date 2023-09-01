import { useEffect, useState } from "react";
import Char1SearchForm from "../components/Char1Search";

const Comparator = (props) => {

  const [selectedCharacter , setSelectedCharacter] = useState({})

  let charData = props.charData;
  if (charData !== undefined) {
    charData = charData
  } else {
    charData = []
  }

  console.log(charData)
  // console.log(charData[0])
  // console.log(charData[0]?.name)

  let nameSearchList = []
  for (let i=0; i<charData.length; i++) {
    nameSearchList.push(charData[i].name)
  }

  const selectCharacterFromList = (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e.target.value)
    console.log(e.target.innerText)
    setSelectedCharacter(charData[e.target.value])
  }

  console.log(selectedCharacter)

  function renderInfo() {
    return (
      <div>
        
        <h2>Name: {selectedCharacter.name}</h2>
        <h3>Combat: {selectedCharacter.powerstats.combat}</h3>
        <h3>power: {selectedCharacter.powerstats.power}</h3>
        <h3>strength: {selectedCharacter.powerstats.strength}</h3>
        <h3>speed: {selectedCharacter.powerstats.speed}</h3>
        <h3>durability: {selectedCharacter.powerstats.durability}</h3>
        <h3>intelligence: {selectedCharacter.powerstats.intelligence}</h3>
        <img src={selectedCharacter.image.url}></img>
      
      </div>
    );
  }

  return (
    <div>
      <h1>{props.name1 ? props.name1 : "Superhero"}</h1>
      
      <Char1SearchForm submitName1Input={props.submitName1Input} />
      
      {nameSearchList.map((name, idx) => (
        <button key={idx} value={idx} onClick={selectCharacterFromList}>{name}</button>
      ))}
      
      {selectedCharacter.powerstats? renderInfo() : "loading..."}
    </div>
  );
};

export default Comparator;
