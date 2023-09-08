import { Link } from "react-router-dom";

import './Footer.scss';

const Footer = () => {
    return ( 
        <div className="Footer">
            <div className="Links">
                <Link to="https://leonardmoses.com/" target="#1"><h5>Portfolio</h5></Link>
                <Link to="https://www.linkedin.com/in/leonard-moses/" target="#2"><h5>LinkedIn</h5></Link>
                <Link className="RightLink" to="https://github.com/leonardmoses" target="#3"><h5>GitHub</h5></Link>
            </div>
        </div>
     );
}
 
export default Footer;