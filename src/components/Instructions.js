import "./Instructions.scss";

const Directions = (props) => {
  return (
    <div className="InstructionsBody">
      <button onClick={props.onClose}>Close Instructions</button>
      <h3>How To Use</h3>
      <div className="ParagraphDiv">
        <p>
          Thank you for using the Marvel Character Comparator. Simply type a
          Character's name into the search field and click search. Your search
          results may include more than one character with a similarly
          registered name. If that happens all the results will populate under
          the search bar. Simply click on the desired character's name and you
          will see all their info! If the name was misspelled or that particular
          character isn't in the database there will be no results.
        </p>
        <p>
          This application is intended for looking up and comparing characters
          from the Marvel Universe. However, this API also includes characters
          from the DC Universe as well as some other popular franchises, so feel
          free to break the rules! There is a full character roster available.
          You may click the "Full Character List" button to view the roster.
          There are hundreds! Please also note that power stats comparing
          characters between different universes should be taken with a grain of
          salt. Apart from that enjoy!
        </p>
        <h3>Credits</h3>
        <p>
          The information in this database belongs to{" "}
          <a href="https://www.superheroapi.com/" target="#">
            Superhero API
          </a>
          , including stats and searched images. The default images belong to{" "}
          <a href="https://www.superherodb.com" target="#2">
            Superhero Database(SHDb)
          </a>
          . None of this data is my own and therefore belong to their respective
          owners.
        </p>
      </div>
    </div>
  );
};

export default Directions;
