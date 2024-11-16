import companyLogo from "../../assets/logo.svg"; // Import the logo
import "./Header.scss";
export default function Header() {
  return (
    <header id="header">
      <div id="header-column-left" className="col">
        <img src={companyLogo} alt="" id="company-logo" />
      </div>
      <div id="header-column-right" className="col">
        <div className="header-link">Home</div>
        <div className="header-link">About Us</div>
        <div className="header-link">Contact Us</div>
        <button className="button-light">Log in</button>
      </div>
    </header>
  );
}
