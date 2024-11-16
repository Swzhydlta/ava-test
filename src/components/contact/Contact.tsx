import imgcontact from "../../assets/Img_Contact.png";
import "./Contact.scss";
export default function Contact() {
  return (
    <div className="section-type-1">
      <div className="container-default p1">
        <div className="col mt-2 p2">
          <div className="contact-form-wrapper">
            <div className="font-box">
              <h2 className="header">Contact Us</h2>
              <div className="bold mt-1">Morbi euismod libero vi</div>
            </div>

            {/* form */}
            <form>
              <div className="form-row mt-1">
                <div className="col">
                  <div className="form-field-wrapper">
                    <label htmlFor="full-name">Full Name:</label>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="col ms-1">
                  <div className="form-field-wrapper">
                    <label htmlFor="email">Email Address:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-field-wrapper mt-1">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" placeholder="" />
              </div>
              <div className="form-field-wrapper mt-1">
                <button className="button-light">Add new phone number</button>
              </div>
              <div className="form-field-wrapper mt-1">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder=""
                  rows="8"
                ></textarea>
              </div>
              <div className="form-row mt-1">
                <input type="checkbox" id="subscribe" name="subscribe" />
                <label htmlFor="subscribe" className="bold">
                  Add address details
                </label>
              </div>
              {/* Address 1 */}
              <div className="form-row mt-1">
                <div className="col">
                  <div className="form-field-wrapper">
                    <label htmlFor="full-name">Address line 1:</label>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="col ms-1">
                  <div className="form-field-wrapper">
                    <label htmlFor="email">Address line 2:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Address 2 */}
              <div className="form-row mt-1">
                <div className="col">
                  <div className="form-field-wrapper">
                    <label htmlFor="full-name">City/town:</label>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      placeholder=""
                      required
                      className="small-field"
                    />
                  </div>
                </div>
                <div className="col ms-1">
                  <div className="form-field-wrapper">
                    <label htmlFor="email">State/county:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=""
                      required
                      className="small-field"
                    />
                  </div>
                </div>
                <div className="col ms-1">
                  <div className="form-field-wrapper">
                    <label htmlFor="email">Postcode:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=""
                      required
                      className="small-field"
                    />
                  </div>
                </div>
                <div className="col ms-1">
                  <div className="form-field-wrapper">
                    <label htmlFor="email">Country:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=""
                      required
                      className="small-field"
                    />
                  </div>
                </div>
              </div>
              <div className="form-field-wrapper mt-1">
                <button type="submit" className="button-dark">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div id="contact-image-wrapper" className="col p2">
          <img src={imgcontact} alt="" id="contact-image" />
        </div>
      </div>
    </div>
  );
}
