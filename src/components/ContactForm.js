import React from "react";
import emailjs from "emailjs-com";

import SvgIcons from "./SvgIcons.js";

import "./pages.css";
import "./components.css";

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xr8pz9y",
        "template_oqlt73m",
        e.target,
        "user_MiN6Umw1mFAmiiwfD8MDo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div className="fullSection">
      <div className="fullSectionContent limitWidthContent">
        <div className="contactFormContainer">
          <h2>Write Us</h2>
          <h5>Tell us about you...</h5>

          <form className="contactForm" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">
                {" "}
                <h5>Name: </h5>{" "}
              </label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                {" "}
                <h5>Contact email: </h5>{" "}
              </label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                {" "}
                <h5>Your message:</h5>{" "}
              </label>
              <textarea
                id="message"
                cols="30"
                rows="5"
                name="message"
                placeholder="Tell us about your project, brand or product or contact us to set up a virtual consultation and speak directly to one of our team members."
              ></textarea>
            </div>

            <button type="submit" className="simpleBtn simpleBtnDark">
              <h4> SEND </h4>
            </button>
          </form>

          <h5>or contact us directly at:</h5>
          <h3>info@socialflowagency.com</h3>

          <h6>Socialflow Agency</h6>
        </div>
      </div>
      <div
        className="backSvg backRightBottom noShowTablet"
        style={{ bottom: "5%", right: "15%", transform: "rotate(15deg)" }}
      >
        <SvgIcons
          dimension="400px"
          iconName="heartMessage"
          fillColor="rgba(189, 202, 251, 1)"
        />
      </div>
      <div
        className="backSvg noShowTablet"
        style={{
          bottom: "5%",
          left: "15%",
          transform: "rotate(-15deg)"
        }}
      >
        <SvgIcons
          dimension="200px"
          iconName="star"
          fillColor="rgba(189, 202, 251, 1)"
        />
      </div>
      <div
        className="backSvg onlyTablet"
        style={{
          bottom: "0%",
          left: "5%",
          transform: "rotate(15deg)"
        }}
      >
        <SvgIcons
          dimension="150px"
          iconName="heartMessage"
          fillColor="rgba(189, 202, 251, 1)"
        />
      </div>
    </div>
  );
}
