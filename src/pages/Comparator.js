import { useState } from "react";
import Char1SearchForm from "../components/Char1Search";

const Comparator = (props) => {
  const charData = [props.charData];
  
  console.log(charData)

  const nameSearchList = [];
  for (let i = 0; i < props.charData.length; i++) {
    // console.log(props.charData[i].name)
    nameSearchList.push(props.charData[i].name);
  }

  // console.log(charData)
  console.log(nameSearchList);

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
      <Char1SearchForm
        name1={props.name1}
        setName1={props.setName1}
        submitName1Input={props.submitName1Input}

      />
      {nameSearchList.map((name,idx) => (
        <button key={idx}>{name}</button>
      ))}
      {props.charData ? renderInfo() : "loading..."}
    </div>
  );
};

export default Comparator;
