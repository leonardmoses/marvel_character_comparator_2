import { useEffect, useState } from "react";
import Char1SearchForm from "../components/Char1Search";

const Comparator = (props) => {

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
    console.log(e.target.innerText)
    props.clickNameFromList(e.target.innerText)
  }

  function renderInfo() {
    return (
      <div>
        {/* 
        <h2>Name: {charData.name}</h2>
        <h3>Combat: {charData.powerstats.combat}</h3>
        <h3>power: {charData.powerstats.power}</h3>
        <h3>strength: {charData.powerstats.strength}</h3>
        <h3>speed: {charData.powerstats.speed}</h3>
        <h3>durability: {charData.powerstats.durability}</h3>
        <h3>intelligence: {charData.powerstats.intelligence}</h3>
      */}
      </div>
    );
  }

  return (
    <div>
      <h1>{props.name1 ? props.name1 : "Superhero"}</h1>
      
      <Char1SearchForm submitName1Input={props.submitName1Input} />
      
      {nameSearchList.map((name, idx) => (
        <button key={idx} onClick={selectCharacterFromList}>{name}</button>
      ))}
      
      {props.name1 ? renderInfo() : "loading..."}
    </div>
  );
};

export default Comparator;
