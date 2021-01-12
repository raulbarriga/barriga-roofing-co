import React from "react";

import servicesImage1 from "../assets/images/servicesImage1.jpg";
import servicesImage2 from "../assets/images/servicesImage2.jpg";
import servicesImage3 from "../assets/images/servicesImage3.jpg";

const ServicesComponent = () => {
  return (
    <>
      <section id='services' className="services">
        <div>
          <section>
            <div className='div1'>
              <img src={servicesImage1} alt={servicesImage1} />
            </div>
            <div className='div2'>
              <img src={servicesImage2} alt={servicesImage2} />
            </div>
            <div className='div3'>
              <img src={servicesImage3} alt={servicesImage3} />
            </div>
          </section>
          <section>
            <div className="paragraphs">
              <div className="serviceColumn">
                <h2>COMMERCIAL</h2>
                <div>
                  <p>
                    With years of experience installing and repairing roofs for
                    commercial buildings and businesses, we take pride in our
                    ability to stay on schedule and have our delivered finished
                    product on budget and on time.
                  </p>
                </div>
              </div>
              <div className="serviceColumn">
                <h2>RESIDENTIAL</h2>
                <div>
                  <p>
                    Residential roofing repairs and roof replacement are the
                    bread and butter of Barriga Roofing Co. We focus on quality
                    work, friendly service, and guaranteed products because we
                    know your home is your most important asset.
                  </p>
                </div>
              </div>
              <div className="serviceColumn">
                <h2>GUTTERS</h2>
                <div>
                  <p>
                    We can remove and replace your gutters, whether you are
                    re-roofing your home or are just looking to replace your
                    gutters, we can help you out. Looking to add gutter screens
                    to your gutters? Give us a call, we can do that for you as
                    well.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ServicesComponent;
