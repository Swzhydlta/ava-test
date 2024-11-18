import companyLogo from "../../assets/logo.svg"; // Import the logo
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <div id="header-wrapper">
        <div id="header-column-left" className="col">
          <Link id="company-logo-wrapper" to="/">
            <img src={companyLogo} alt="" id="company-logo" />
          </Link>
        </div>
        <div id="header-column-right" className="col">
          <div className="header-link">
            <Link to="/">Home</Link>
          </div>
          <div className="header-link">
            <Link to="/about">About us</Link>
          </div>
          <Link to="contact" className="header-link">
            Contact us
          </Link>
          <button className="button-light">Log in</button>
        </div>
      </div>
    </header>
  );
}
