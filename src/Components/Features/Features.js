import React from "react";
import './Features.css';

const Features = () => {
  return (
    <div>
    <section className="container" id="about">
      <h2 className="title">Features</h2>
      <div className="content">
        <img
          src="./feature.png"
          alt="Me sitting with a laptop"
          className="aboutImage"
        />
        <ul className="aboutItems">
          <li className="aboutItem">
            <img src="clock.png" alt="Cursor icon" />
            <div className="aboutItemText">
              <h3>Accelerate job search and reclaim time.</h3>
              <p>
              Job applications can be time-consuming. Our resume scanner has extensively examined numerous job descriptions to pinpoint the most effective keywords for your resume
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src="secure.png" alt="Server icon" />
            <div className="aboutItemText">
              <h3>Confidential and Secure</h3>
              <p>
              Your privacy is of utmost importance to us, and we go to great lengths to safeguard and ensure the security of your data. Our measures include secure servers, complete transparency, and stringent policies.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src="key.png" alt="UI icon" />
            <div className="aboutItemText">
              <h3>Resume Keyword Analyzer</h3>
              <p>
              WorkLoom instantly generates a match report by comparing your resume with a job description. Our Applicant Tracking System (ATS) scanner employs technology similar to that used by Fortune 500 companies to screen applicants.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </div>
  );
};
export default Features;