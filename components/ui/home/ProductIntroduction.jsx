import React from 'react';

export const ProductIntroduction = () => (
  <div id="introduction">
    <div id="image__sm">
      <span>
        <img
          src="/undraw_Scrum_board_re_wk7v.svg"
          alt="header-image"
          width="60%"
        />
      </span>
    </div>
    <div id="summary">
      <h1 id="title">A modern and highly customizable story dashboard.</h1>
      <p>
        Create stories to tell a data narrative, provide context, demonstrate
        how decisions relate to outcomes, or simply make a compelling case.
      </p>
      <span id="started-button">
        <button className="btn primary">Get Started</button>
      </span>
      <span id="documentation-button">
        <button className="btn">Documentation</button>
      </span>
    </div>
    <div id="image__lg">
      <span>
        <img
          src="/undraw_Scrum_board_re_wk7v.svg"
          alt="header-image"
          width="80%"
        />
      </span>
    </div>
  </div>
);
