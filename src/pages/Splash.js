import { Link } from "react-router-dom";

import "./Splash.scss"

const Splash = () => {
  return (
    <div className="SplashPage">
      <div className="BannerContainer">
        <div className="HeaderDiv">
          <h1>MARVEL</h1>
          <h2>Character Comparator</h2>
        </div>
        <div className="EnterDiv">
          <Link to="/comparator"><h5>Enter</h5></Link>
        </div>
      </div>
    </div>
  );
};

export default Splash;
