import imgcontact from "../../assets/Img_Contact.png";
import "./Contact.scss";
import { Routes, Route } from "react-router-dom";
import ContactForm from "./ContactForm";
import ThankYou from "./ThankYou";

export default function Contact() {
  return (
    <div className="section-type-1">
      <div className="container-default p1">
        <div className="col mt-2 p1">
          <div className="contact-form-wrapper">
            <div className="font-box">
              <h2 className="header">Contact Us</h2>
              <div className="bold mt-1">Morbi euismod libero vi</div>
            </div>

            <Routes>
              <Route path="/" element={<ContactForm />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </div>
        </div>

        <div id="contact-image-wrapper" className="col p2">
          <img src={imgcontact} alt="" id="contact-image" />
        </div>
      </div>
    </div>
  );
}
