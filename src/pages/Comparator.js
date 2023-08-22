import { useState } from "react";
import Char1SearchForm from "../components/Char1Search";


const Comparator = (props) => {

  const [ name1 , setName1 ] = useState('')

  console.log(props.charData)

  const charData = props.charData[0]

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
      <h1>{name1}</h1>
      <Char1SearchForm name1={name1} setName1={setName1} />
      {props.charData ? renderInfo() : 'loading...'}
    </div>
  
  );
};

export default Comparator;
