import { Link } from "react-router-dom";

const MainNav = (props) => {
  return (
    <div>
      <button className="btn" onClick={props.openDirections}>Instructions</button>
      <ul>
        <li><Link to="/comparator">Comparator</Link></li>
        <li><Link to="/futureapp">Future App</Link></li>
      </ul>
    </div>
  );
};

export default MainNav;
