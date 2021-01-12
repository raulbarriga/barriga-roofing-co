import React from "react";
import Logo from "../assets/images/barrigaroofing_logo.jpg";

const HeaderComponent = () => {
  return (
    <>
      <header>
        <img className="logo" src={Logo} alt={Logo} />
        <div className='titles'>
          <h1 className="title1">BARRIGA ROOFING CO.</h1>
          <h2 className="title2">COMMERCIAL & RESIDENTIAL</h2>
        </div>
        <div className="bottom-section">
          <div className="bullets">
            <ul>
              <li>Shakes</li>
              <li>Tile</li>
            </ul>
            <ul>
              <li>Shingles</li>
              <li>Gravel</li>
            </ul>
            <ul>
              <li>Composition</li>
              <li>New Roofs</li>
            </ul>
          </div>
          <div className="contact">
            <p>
              <span>Ask for RICARDO</span>
              <span>Cell. (650) 464-6230</span>
            </p>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#services">SERVICES</a>
              </li>
              <li>
                <a href="#pro-gallery-default-dom-id">MEDIA GALLERY</a>
              </li>
              <li>
                <a href="#form-section">FREE ESTIMATE</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
