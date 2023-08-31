import { useEffect, useState } from "react";
import Char1SearchForm from "../components/Char1Search";

const Comparator = (props) => {
  let charData = [props.charData];

  // console.log(charData[0]?.length)
  // console.log(charData[0])
  let charDataUpdate = charData[0];
  console.log(charDataUpdate);

  const nameSearchList = [];

  function nameUpdated() {
    if (charData[0]?.length > 0) {
      for (let i=0; i < nameSearchList.length; i++) {
        console.log(nameSearchList[i])
      }
    } else {
      console.log('Nothing here yet')
    }
  }




  useEffect(() => {
    nameUpdated();
  }, [props.name1]);

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
        <button key={idx}>{name}</button>
      ))}

      {props.name1 ? renderInfo() : "loading..."}
    </div>
  );
};

export default Comparator;
