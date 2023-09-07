import "./Instructions.scss";

const Directions = (props) => {
  return (
    <div className="InstructionsBody">
      <button onClick={props.onClose}>Close Instructions</button>
      <h3>How To Use</h3>
      <div className="ParagraphDiv">
        <p>
          Thank you for using the Marvel Character Comparator. Simply type a
          character into the search field and submit. Your search results may
          inlucde more than one character with a similarly registered name and
          all the results will populate under the search bar. Simply click on
          the desired character and you will see all their info! If the name was
          mispelled or that particular character isn't in the database there
          will be no results.
        </p>
        <p>
          This application is intended for looking up and comparing characters
          from the Marvel Universe. However, this API also includes characters
          from the DC Universe as well as some other popular franchises so feel
          free to break the rules! You can click on the full character list to
          get an idea what's included. There are hundreds!
        </p>
      </div>
    </div>
  );
};

export default Directions;
