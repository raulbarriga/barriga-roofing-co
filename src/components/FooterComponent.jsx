import React from "react";

const FooterComponent = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className="title">
            <p>
              <span>
                <a href="/">BARRIGA ROOFING CO.</a>
              </span>
            </p>
          </div>
          <div className="email">
            <p>
              <span>
                <a href="mailto:barrigaroofingco@gmail.com">
                  barrigaroofingco@gmail.com
                </a>
              </span>
            </p>
          </div>
          <div className="phone">
            <p>
              <span>650-464-6230</span>
            </p>
          </div>
          <div className="copyright">
            <p>
              <span>
                ©2021 by{" "}
                <a href="https://github.com/raulbarriga">Raul Barriga</a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
