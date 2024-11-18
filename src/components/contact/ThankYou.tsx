import validIcon from "../../assets/Icon_Valid.svg";

export default function ThankYou() {
  return (
    <div id="contact-thank-you-wrapper" className="mt-2 p2">
      <div id="valid-icon-wrapper" className="p1">
        <img src={validIcon} alt="" id="valid-icon" />
      </div>
      <h2 className="mt-2">Your message has been sent</h2>
      <div className="mt-1">We will be in contact within 24 hours</div>
    </div>
  );
}
