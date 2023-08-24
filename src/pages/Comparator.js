import { useState } from "react";
import Char1SearchForm from "../components/Char1Search";


const Comparator = (props) => {

  const [name1Submitted , setSubmittedName1] = useState('Name')

  const charData = props.charData[0]

  function onName1Search(name1Input) {
    setSubmittedName1(name1Input)
    console.log(name1Input)
    console.log(name1Submitted)
  }


  // const name = props.charData[0].name
  // const combat = props.charData[0].combat
  // const durability = props.charData[0].durability
  // const intelligence = props.charData[0].intelligence
  // const power = props.charData[0].power
  // const speed = props.charData[0].speed
  // const strength = props.charData[0].strength

  
  function renderInfo() {
    return (
      <div>
        <h2>Name: {charData.name}</h2>
        <h3>Combat: {charData.powerstats.combat}</h3>
        <h3>power: {charData.powerstats.power}</h3>
        <h3>strength: {charData.powerstats.strength}</h3>
        <h3>speed: {charData.powerstats.speed}</h3>
        <h3>durability: {charData.powerstats.durability}</h3>
        <h3>intelligence: {charData.powerstats.intelligence}</h3>
      </div>
    )
  }

  return (
    <div>
    <h1>{name1Submitted ? name1Submitted : ""}</h1>
    <Char1SearchForm  onName1Search={onName1Search} />
      {props.charData ? renderInfo() : 'loading...'}
    </div>
  
  );
};

export default Comparator;
