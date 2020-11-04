import React from 'react';

export const FeatureOne = () => (
  <>
    <div id="divider">
      <div className="custom-shape-divider-bottom-1604375464">
        <div className="custom-shape-divider-top-1604376211">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div id="feature-one-container">
      <div id="summary">
        <h1 id="title">
          Each individual sheet in a story is called a{' '}
          <span className="em-text">story point.</span>
        </h1>
        <div id="images__sm">
          <div id="mockup-1">
            <p id="title-right">#GForceStats</p>
            <img className="mockup-image" src="/mockup-1.png" alt="mockup-1" width="70%" />
          </div>
          <div id="mockup-2">
            <img className="mockup-image" src="/mockup-2.png" alt="mockup-2" width="70%" />
            <p id="title-left">#HForceStats</p>
          </div>
        </div>
        <p id="description">
          A story is a sheet, so the methods you use to{' '}
          <span style={{ backgroundColor: '#D8DEE9' }}>create</span>,{' '}
          <span style={{ backgroundColor: '#D8DEE9' }}>name</span>, and{' '}
          <span style={{ backgroundColor: '#D8DEE9' }}>manage</span> worksheets
          and dashboards also apply to stories. At the same time, a story is
          also a collection of sheets, arranged in a sequence.{' '}
        </p>
        <button className="btn">Learn More</button>
      </div>
      <div id="images__lg">
        <div id="mockup-1">
          <p id="title-right">#GForceStats</p>
          <img className="mockup-image" src="/mockup-1.png" alt="mockup-1" />
        </div>
        <div id="mockup-2">
          <img className="mockup-image" src="/mockup-2.png" alt="mockup-2" />
          <p id="title-left">#HForceStats</p>
        </div>
      </div>
    </div>
  </>
);
