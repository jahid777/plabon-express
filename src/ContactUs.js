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
      <main className="row mt-5 mb-5 container" style={{ margin: "0 auto" }}>
        <div className="col-md-8 pl-5">
          <ContactFrom />
        </div>

        <div className="col-md-4 pl-5 mt-2">
          <h5 className="text-background-head">কপোরেট অফিসঃ </h5>
          <p className="background-text">
            লাহিনী বটতলা কুষ্টিয়া সদর, কুষ্টিয়া।
          </p>
          <h5 className="text-background-head">শাখা অফিসঃ </h5>
          <p className="background-text">
            পাংশা টেম্পু স্ট্যান্ড পাংশা, রাজবাড়ী।
          </p>
          <h5 className="text-background-head">মোবাইল নং-</h5>{" "}
          <p className="background-text"> ০১৭১১১১৮২৬২, ০১৬৩৪৩৫০০০০</p>
          <h5 className="text-background-head">মেইলঃ</h5>{" "}
          <p className="background-text">hello@plabonexpress.com</p>
          <p className="background-text">
            {" "}
            (বিঃ দ্রঃ আপনার প্রয়োজনে যে কোন সময় আমাদের ফোন করতে পারেন।)
          </p>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
