import {totalCharList} from "../data/TotalCharList.js"
import "./CharacterList.scss";

const CharcterList = (props) => {

  return (
    <div className="CharacterListComponent">

      <div className="CharacterListHeader">
        <button onClick={props.onClose}>Close</button>
        <h3>List of Searchable Characters</h3>
      </div>
      
      <div className="CharacterListBody">
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