import React from "react";
import Logo from "../assets/images/barrigaroofing_logo.jpg";

const HeaderComponent = () => {
  return (
    <>
      {/* <header>
        <div>
          <section className="top">
            <div>
              <img className="logo" src={Logo} alt={Logo} />
            </div>
            <div>
              <p>
                <span className="title1">BARRIGA ROOFING CO.</span>
              </p>
            </div>
            <div>
              <p>
                <span className="title2">COMMERCIAL & RESIDENTIAL</span>
              </p>
            </div>
          </section>
          <section className="bottom">
            <div className="bullets">
              <div>
                <ul>
                  <li>Shakes</li>
                  <li>Tile</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Shingles</li>
                  <li>Gravel</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Composition</li>
                  <li>New Roofs</li>
                </ul>
              </div>
            </div>
            <div className="contact">
              <p>
                <span>Ask for RICARDO</span>
              </p>
              <p>
                <span>Cell. (650) 464-6230</span>
              </p>
            </div>
            <div className="nav-menu">
              <nav>
                <ul>
                  <li>
                    <a href="#home">HOME</a>
                  </li>
                  <li>
                    <a href="#services">SERVICES</a>
                  </li>
                  <li>
                    <a href="#media-gallery">MEDIA GALLERY</a>
                  </li>
                  <li>
                    <a href="#free-estimate">FREE ESTIMATE</a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </div>
      </header> */}
      <header>
        <img className="logo" src={Logo} alt={Logo} />
        <div>
          <h1 className="title1">BARRIGA ROOFING CO.</h1>
          <h2 className="title2">COMMERCIAL & RESIDENTIAL</h2>
        </div>
        <div className='bullets'>
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
              <a href="#media-gallery">MEDIA GALLERY</a>
            </li>
            <li>
              <a href="#free-estimate">FREE ESTIMATE</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
