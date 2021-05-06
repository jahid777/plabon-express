import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = (showBelow) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };
  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });
  return (
    // <div className="row main-footer">
    //   <div className="col-md-10 container">
    //     <h5 className="footer-text">
    //       <small>
    //         <strong>
    //           Copyright © Continental Courier Service {new Date().getFullYear()}{" "}
    //         </strong>
    //       </small>
    //     </h5>
    //   </div>
    //   <div className="col-md-2 container">
    //     {/* this is linkig to the navbar to go to the top */}
    //     {/* <Link to="go-top">
    //       <button className="footer-btn">Go Top</button>
    //     </Link> */}
    //     <button onClick={handleClick} className="footer-btn">
    //       Go Top
    //     </button>
    //   </div>
    // </div>
    <div className="footer-main">
      <div className="text">
        <h5 className="footer-text pl-5">
          <small>
            <strong>
              © Copyright 2019 - 2020. Developed by Answar IT Software
              {/* Copyright © Continental Courier Service  */}
              {/* {new Date().getFullYear()} */}
            </strong>
          </small>
        </h5>
      </div>
      <div className="footer-btn">
        <button onClick={handleClick} className="footer-btn">
          Go Top
        </button>
      </div>
    </div>
  );
};

export default Footer;
