import React, { useState } from "react";
import "./Contact.scss";
import { FormDetails } from "../../interfaces/FormDetails";
import formService from "../../services/formService";
import { useNavigate } from "react-router-dom";

interface Error {
  FieldName: string;
  MessageCode: string;
}
export default function ContactForm() {
  let navigate = useNavigate();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>([""]);
  const [message, setMessage] = useState<string>("");
  const [addressAdded, setAddressAdded] = useState<boolean>(false);
  const [addressLine1, setAddressLine1] = useState<string>("");
  const [addressLine2, setAddressLine2] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [errors, setErrors] = useState<Error[] | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handlePhoneChange = (index: number, value: string) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers[index] = value;
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, ""]);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const dataToSubmit: FormDetails = {
      FullName: fullName,
      EmailAddress: email,
      PhoneNumbers: phoneNumbers,
      Message: message,
      bIncludeAddressDetails: addressAdded,
      AddressDetails: {
        AddressLine1: addressLine1,
        AddressLine2: addressLine2,
        CityTown: city,
        StateCounty: state,
        Postcode: postcode,
        Country: country,
      },
    };

    const response = await formService.postFormData(dataToSubmit);
    if (response) {
      setSubmitting(false);
    }

    if (response.status == "apiError") {
      console.log("response", response);
      setErrors(response.data.Errors);
      return;
    }
    if (response.status == "error") {
      const error: Error = {
        FieldName: "Network",
        MessageCode: "A general error has occured",
      };
      setErrors([error]);
      return;
    }
    navigate("/contact/thank-you");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-row mt-1">
          <div className="col">
            <div className="form-field-wrapper">
              <label htmlFor="full-name">Full Name:</label>
              <input
                type="text"
                id="full-name"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>
          <div className="col ms-md-1">
            <div className="form-field-wrapper">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        {phoneNumbers.map((phone, index) => (
          <div className="form-field-wrapper mt-1" key={index}>
            <label htmlFor={`phone-${index}`}>Phone Number {index + 1}:</label>
            <input
              type="tel"
              id={`phone-${index}`}
              name={`phone-${index}`}
              value={phone}
              onChange={(e) => handlePhoneChange(index, e.target.value)}
            />
          </div>
        ))}
        <div className="form-field-wrapper mt-1">
          <button
            type="button"
            className="button-light"
            onClick={addPhoneNumber}
          >
            Add new phone number
          </button>
        </div>
        <div className="form-field-wrapper mt-1">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={8}
          ></textarea>
        </div>
        <div className="form-row mt-1">
          <input
            type="checkbox"
            id="add-address"
            name="add-address"
            checked={addressAdded}
            onChange={(e) => setAddressAdded(e.target.checked)}
          />
          <label htmlFor="subscribe" className="bold">
            Add address details
          </label>
        </div>
        {/* Address 1 */}
        {addressAdded && (
          <>
            <div className="form-row mt-1">
              <div className="col">
                <div className="form-field-wrapper">
                  <label htmlFor="addressLine1">Address line 1:</label>
                  <input
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                  />
                </div>
              </div>
              <div className="col ms-md-1">
                <div className="form-field-wrapper">
                  <label htmlFor="addressLine2">Address line 2:</label>
                  <input
                    type="text"
                    id="addressLine2"
                    name="addressLine2"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* Address 2 */}
            <div className="form-row mt-1">
              <div className="col">
                <div className="form-field-wrapper">
                  <label htmlFor="city">City/town:</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="small-field"
                  />
                </div>
                <div className="form-field-wrapper">
                  <label htmlFor="state">State/county:</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="small-field right-small-field"
                  />
                </div>
              </div>

              <div className="col ms-md-1">
                <div className="form-field-wrapper">
                  <label htmlFor="postcode">Postcode:</label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="small-field"
                  />
                </div>
                <div className="form-field-wrapper">
                  <label htmlFor="country">Country:</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="small-field right-small-field"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        <div className="form-field-wrapper mt-1">
          <button type="submit" className="button-dark">
            {!submitting ? "Submit" : "Submitting"}
          </button>
        </div>
      </form>
      <>
        {errors && (
          <div className="error-wrapper mt-1">
            <div className="bold">Errors:</div>
            {errors &&
              errors.map((error) => (
                <div className="error">
                  <span className="bold">{error.FieldName}: </span>
                  {error.MessageCode}
                </div>
              ))}
          </div>
        )}
      </>
    </>
  );
}
