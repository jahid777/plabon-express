import React from "react";
import Navbar from "../Navbar";
import video4 from "../Shipping/4. Cargo-1.m4v";
import Sidebar from "../Sidebar";

const Cargo = () => {
  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: "1400px", margin: "100px auto" }}>
        <div className="row w-100" style={{ padding: "20px 60px" }}>
          <div
            className="col-lg-4 col-md-12 col-sm-12"
            style={{ marginTop: "100px" }}
          >
            <Sidebar />
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 pt-sm-4">
            <h4 className="title">
              {" "}
              <strong> CARGO </strong>{" "}
            </h4>
            <p>
              {" "}
              <em>
                {" "}
                <b>
                  {" "}
                  Your quick, customized, and successful solutions delivery{" "}
                </b>
              </em>
            </p>
            <video
              style={{ width: "100%" }}
              muted
              loop
              autoPlay
              // controls
              src={video4}
            ></video>
            <br /> <br />
            <p style={{ textAlign: "justify" }}>
              {" "}
              <b> Business Application: </b> Competitiveness in the global
              marketplace requires speed and agility at every level. Businesses
              must respond quickly to meet customer demand, improve speed to
              market, react swiftly to changing market conditions and constantly
              seek gains in productivity and profitability. A sophisticated
              business application platform is critical to achieving these
              objectives. Business Application development software to
              real-world problems requires leading technology and an expert
              team. Our professional programmers are developing all sorts of
              application software may need including games, educational
              software, office applications, internet software, utilities, text
              and graphics editors, communication software.
            </p>
            <p style={{ textAlign: "justify" }}>
              {" "}
              <b> E-Commerce Solution: </b> AnswarIT provides customized
              E-Commerce solutions for local and international clients. Today
              e-commerce has revolutionized the system of communication and
              commerce. It has brought dramatic transformation in the way the
              consumers purchase and consume the goods and services at the
              online auction sites. AnswarIT has earned the reputation of being
              the best provider of internet and e-commerce solutions to a wide
              range of industries. AnswarIT designs, develops and manages its
              client’s website and all these are done in a productive
              environment to ensure its client’s success.{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
              {" "}
              <b> MIS Solution: </b> Are you looking to make the most of your
              company's technology investment? Are you seeking progressive,
              profit-building ways to streamline your process? MIS Solutions can
              guide you to choose and implement the right technology for your
              business. AnswarIT’s MIS Solutions integrate disparate business
              processes and improve productivity and efficiency within
              enterprises. Customized MIS solutions may include HR & Payroll
              Management, Customer Relationship Management, Sales Tracking
              System, Operations Management, Accounting Management, Asset
              Management, Projects Management and Admin portal etc.{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
              {" "}
              <b> Web Development: </b> In today’s market website development
              plays a vital role for an organization. It is a onetime investment
              with huge returns. Web development solutions find its way in the
              implementation of business policies on the web by the use of data
              services. If you are looking for software consultant to develop
              your web application or website then AnswarIT is the stoppage for
              you as it provides practical and reliable advises for your
              business. AnswarIT is an expert in web development solutions. It
              provides services across the globe which is within the budget and
              is customer centric.{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
              {" "}
              AnswarIT web development focusing areas are:
            </p>
            <ul>
              <li> Web Application Development </li>
              <li> Web and Enterprise Portal Development </li>
              <li> Web Design and Development </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cargo;
