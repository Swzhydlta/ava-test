import companyLogo from "../../assets/logo.svg"; // Import the logo
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <div id="header-column-left" className="col">
        <Link to="/">
          <img src={companyLogo} alt="" id="company-logo" />
        </Link>
      </div>
      <div id="header-column-right" className="col">
        <div className="header-link">
          <Link to="/">Home</Link>
        </div>
        <div className="header-link">About Us</div>
        <Link to="contact" className="header-link">
          Contact us
        </Link>
        {/* <div>Contact Us</div> */}
        <button className="button-light">Log in</button>
      </div>
    </header>
  );
}
