import React, { Component } from "react";
import { Link } from "react-router-dom";

import VideoSection from "./VideoSection.js";
import ServicesSection from "./ServicesSection.js";
import VierCards from "./VierCards.js";
import SvgIcons from "./SvgIcons.js";
import ContactForm from "./ContactForm.js";

import "./pages.css";
import "./unterseiteInfo.css";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="homepage">
        <div className="fullSection socialHeader">
          <div className="socialHeaderGradient"></div>
          <div className="socialHeaderTitle">
            <h1>
              {" "}
              Let's Get You <span style={{ fontWeight: "900" }}>
                Noticed
              </span>{" "}
            </h1>
            <h6>
              {" "}
              Comunications, digital strategy & creative contentn creation.
            </h6>
          </div>
          <div className="tikenModule" style={{ color: "#060606" }}>
            <div className="tiken firstTiken">
              <div className="tikenTop">
                <h2> 1.7x </h2>
              </div>
              <div className="tikenBottom">
                <h6> Engagement With Our Content. </h6>
              </div>
            </div>
            <div
              className="tiken secondTiken"
              style={{ borderColor: "#060606" }}
            >
              <div className="tikenTop">
                <h2> 69 </h2>
              </div>
              <div className="tikenBottom">
                <h6> Completed projects to date. </h6>
              </div>
            </div>
            <div className="tiken thirdTiken">
              <div className="tikenTop">
                <h2> 1B+ </h2>
              </div>
              <div className="tikenBottom">
                <h6> People reached by our work. </h6>
              </div>
            </div>
          </div>
          <div className="socialHeaderCallToAction">
            <Link to={"/Contacts"}>
              <button className="simpleBtn simpleBtnDark">
                <h4> GET IN TOUCH </h4>
              </button>
            </Link>
            <Link to={"/Contacts"}>
              <h6> Schedule a Virtual Consultation</h6>
            </Link>
          </div>
          <div className="socialManagement">
            <div className="socialManagementContent">
              <div className="iconBox instaBox">
                {" "}
                <SvgIcons
                  dimension="100px"
                  iconName="instagram"
                  fillColor="#fff"
                />{" "}
              </div>
              <div className="iconBox tiktokBox">
                {" "}
                <SvgIcons
                  dimension="100px"
                  iconName="tiktok"
                  fillColor="#fff"
                />{" "}
              </div>
              <div className="iconBox youtubeBox">
                {" "}
                <SvgIcons
                  dimension="100px"
                  iconName="youtube"
                  fillColor="#fff"
                />{" "}
              </div>
              <div className="iconBox facebookBox">
                {" "}
                <SvgIcons
                  dimension="100px"
                  iconName="facebook"
                  fillColor="#fff"
                />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="fullSection">
          <div className="fullSectionContent limitWidthContent">
            <h1 className="bigTitle"> Our Projects </h1>
            <VierCards />
          </div>
          <div className="fullSectionContent limitWidthContent dritteBottom">
            <div className="unterseiteInfo">
              <div className="unterseiteTitle">
                <h5> Expertise </h5>
                <h2> Mastery in every axpect of the digital space </h2>
              </div>
              <div className="unterseiteText">
                <p>
                  {" "}
                  We deploy teams on demand, that can design, build and launch
                  your vision at scale. Whether you're a Fortune 500, a startup
                  or even a local business - we give our clients the creative,
                  technical and business talent they need to succeed.{" "}
                </p>
              </div>
              <div className="unterseiteButtons">
                <Link to={"/Projects"}>
                  <button className="circleBtn circleBtnDark">
                    <span className="circleBtnIcon">+</span>
                    <h4> SEE CASE HISTORY</h4>
                  </button>
                </Link>
                <Link to={"/Contacts"}>
                  <button className="simpleBtn simpleBtnDark">
                    <h4> CONTACT US </h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="backSvg backRightBottom">
            <SvgIcons
              dimension="600px"
              iconName="star"
              fillColor="rgba(189, 202, 251, 1)"
            />
          </div>
        </div>

        <div className="fullSection">
          <div className="fullSectionContent limitWidthContent">
            <h1 className="bigTitle">Our Services </h1>
            <ServicesSection />
          </div>
          <div className="fullSectionContent limitWidthContent dritteBottom">
            <div className="unterseiteInfo">
              <div className="unterseiteTitle">
                <h5> Full Package </h5>
                <h2> 360° Digital Presence </h2>
              </div>
              <div className="unterseiteText">
                <p>
                  {" "}
                  We establish an influencer network that fits your brand,
                  increase your sales with a beautiful website, and free up your
                  time by managing your social media accounts.{" "}
                </p>
              </div>
              <div className="unterseiteButtons">
                <Link to={"/Projects"}>
                  <button className="circleBtn circleBtnDark">
                    <span className="circleBtnIcon">+</span>
                    <h4> SEE CASE HISTORY </h4>
                  </button>
                </Link>
                <Link to={"/Services"}>
                  <button className="circleBtn circleBtnDark">
                    <span className="circleBtnIcon">+</span>
                    <h4> SEE SERVICES </h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="backSvg backLeftBottom noShowTablet">
            <SvgIcons
              dimension="400px"
              iconName="heartMessage"
              fillColor="rgba(189, 202, 251, 1)"
            />
          </div>
        </div>
        <VideoSection />
        <ContactForm />
      </div>
    );
  }
}
