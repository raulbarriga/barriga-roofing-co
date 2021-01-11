import React from "react";

import roofImage1 from "../assets/images/roofImage1.jpg";

const AboutMeComponent = () => {
  return (
    <>
      <section className="about-me">
        <div className="container">
          <div>
            <img src={roofImage1} alt={roofImage1} />
          </div>
          <div className="whoIAm">
            <h1>
              <span>Who I Am</span>
            </h1>
            <p>A Local Expert Committed to Excellence</p>
            <p>
              I’ve been an in-demand Roofing Contractor in the greater Bay Area
              for more than 30 years. I have the know-how to tackle everything
              from the smallest of repairs to large-scale projects. No matter
              the size of the job. I always work hard to ensure my clients are
              completely satisfied with my work. Call to schedule an initial
              consultation today. Ask for Ricardo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMeComponent;
