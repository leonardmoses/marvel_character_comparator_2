import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/directions">Directions</Link>
        </li>
        <li>
          <Link to="/">Comparator</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
