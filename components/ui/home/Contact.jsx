import React from 'react';

export const Contact = () => (
  <>
    <div id="divider">
      <div className="custom-shape-divider-top-1604464607">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
    <div id="contact-container">
      <h1>Nordify your digital home.</h1>
      <p>
        Choose from a broad and constantly growing spectrum of port projects to
        unify the appearance of your favorite applications.
      </p>
      <button className="btn">Learn More</button>
      <div id="contact-submittion">
        <div id="image">
          <span>
            <img
              src="/undraw_hey_email_liaa.svg"
              alt="contact-image"
              width="40%"
            />
          </span>
        </div>
        <div id="form">
          <input type="text" placeholder="Email" />
          <button id="submit-button" className="btn primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  </>
);
