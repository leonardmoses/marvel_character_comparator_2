

const Comparator = (props) => {

  console.log(props.charData)

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
        <h2>Name: {props.charData[0].name}</h2>
        <h3>Combat: {props.charData[0].powerstats.combat}</h3>
        <h3>power: {props.charData[0].powerstats.power}</h3>
        <h3>strength: {props.charData[0].powerstats.strength}</h3>
        <h3>speed: {props.charData[0].powerstats.speed}</h3>
        <h3>durability: {props.charData[0].powerstats.durability}</h3>
        <h3>intelligence: {props.charData[0].powerstats.intelligence}</h3>
      </div>
    )
  }

  return (
    <div>
      {props.charData ? renderInfo() : 'loading...'}
    </div>
  
  );
};

export default Comparator;
