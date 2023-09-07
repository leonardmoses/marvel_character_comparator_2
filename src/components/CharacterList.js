import {totalCharList} from "../data/TotalCharList.js"
import "./CharacterList.scss";

const CharcterList = (props) => {

  return (
    <div className="CharacterListBody">
      <h3>List of Searchable Characters</h3>
      <button onClick={props.onClose}>Close</button>
      <div className="ListContainer">
        <ul>
          {totalCharList.map((character, idx) => (
            <li key={idx}>{character.id} {character.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharcterList;