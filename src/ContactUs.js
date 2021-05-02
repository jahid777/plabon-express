import React from "react";
import ContactFrom from "./ContactFrom";
import "./ContactUs.css";
import contactImg from "./image/contact.jpg";
import Navbar from "./Navbar";

const ContactUs = () => {
  return (
    <>
      <section style={{ width: "100%" }}>
        <Navbar />
        <div className="contact-main-header">
          <img className="contact-img" src={contactImg} alt="" />
          <div class="centered">Contact Us</div>
        </div>
      </section>
      <main className="row mt-5 mb-5 container">
        <div className="col-md-8 pl-5">
          <ContactFrom />
        </div>

        <div className="col-md-4 pl-5">
          <h5 className="text-background-head">Corporate Address:</h5>
          <p className="background-text">
            10/3 Arambag (1st Floor) Motijheel, Dhaka-1000.
          </p>
          <h5 className="text-background-head">Contact No:</h5>{" "}
          <p className="background-text">
            {" "}
            7194399-400. 7192842-43 7193268-9, 7191214, 719242
          </p>
          <h5 className="text-background-head">CustomerCare:</h5>{" "}
          <p className="background-text">0176 2680005, 0176 2680006</p>
          <h5 className="text-background-head">
            Online Shop & Ecommerce Customer Care:
          </h5>{" "}
          <p className="background-text"> 09611 113 113</p>
          <h5 className="text-background-head"> Sales Team:</h5>{" "}
          <p className="background-text">01762 680404Agency</p>
          <h5 className="text-background-head"> Affairs:</h5>{" "}
          <p className="background-text">01762 680009</p>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
