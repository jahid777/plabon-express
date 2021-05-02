import React from "react";
import "./AboutUs.css";
import aboutImg from "./image/aboutbg.jpg";
import continentalImg from "./image/aboutpic.jpg";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className="about-main-header">
          <img className="about-img" src={aboutImg} alt="" />
          <div class="centered">Who We Are</div>
        </div>
      </section>

      <main className="container">
        <section>
          <h1 className="text-background-head">Background</h1>
          <p className="background-text">
            Continental Group began its journey in 1977 with “Continental
            Progressive Industries Ltd.” However, the major portfolio of
            Continental Group, “Continental Courier Services LTD, inaugurated in
            1983. Late M. Ruhul Amin Chisty, former chairman of Continental
            Group, has pioneered the concept of courier services in Bangladesh,
            starting with only 14 sales and distribution stations and a
            workforce of 45 employees (at the time of inception). <br /> <br />
            Continental Courier Services has built its market by providing
            door-to-door document and parcel delivery within the shortest
            possible time, a service that was not available in Bangladesh at the
            time of its inception. As a result, the market grew rapidly and
            others followed the footsteps of Continental, but Continental
            remains at the top in terms of market share and assures the best
            quality of service in the country, till date. Rapidly expanding its
            network all over Bangladesh, Continental is still the largest
            network in the country.
          </p>
        </section>

        <section className="row">
          <div className="col-md-8">
            <h1 className="text-background-head">
              Continental Courier Services LTD
            </h1>
            <p className="background-text">
              Continental Courier Service began its operations with no more than
              45 employees divided between 14 sales and distribution stations.
              Today, Continental Courier Service holds its reputation with
              thousands of employees, sub-agencies, sales and distribution
              stations; withholding its place of the largest courier network in
              Bangladesh.
            </p>
          </div>
          <div className="col-md-4">
            <img
              style={{ height: "180px", marginTop: "40px" }}
              src={continentalImg}
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className="text-background-head">Continental Courier Services</h1>
          <p className="background-text">
            <span className="title">Courier Services:</span> The first of its
            kind in the country, it was established in the year 1983. Over a
            period of 33 years, the company grew with 114 zonal offices and
            thousands of sub-agencies, run by a well-trained workforce, covering
            even the most remote places in the country.
            <br /> <br />
            <span className="title">Parcel Services:</span> Starting its
            operations in 2004 with only 24 vehicles, Continental Parcel Service
            has widened its network with the help of a growing number of
            vehicles. For its safe, quick and timely delivery, Continental
            Parcel Service is trusted by the largest companies of Bangladesh for
            the distribution of their products and equipment’s.
            <br />
            <br />
            <span className="title"> Innovation of Continental Courier:</span>
            <br />
            <br />
            a) On Board Courier (OBC): ‘On Board Courier’ is an initiative of
            Continental Courier Service. Though OBC, Continental organizes and
            ensures delivery of its customers’ consignment within division and
            inter-division, rather than receiving all its consignments in the
            central sorting station at Dhaka. Furthermore, a staff member is
            designated with every shipment to ensure on-time delivery. b)
            Weather Proof Bag: “Weather and Pilferage Proof” bags, also known as
            “Poly Bags” are used in order to ensure protection of our customers’
            consignments. Multiple sizes are provided as per the requirement of
            customers. c) Top Urgent Service: ‘Top Urgent’ services for are
            provided for customers who need an immediate delivery for their
            documents. Under this service, if a document is shipped Dhaka-Dhaka,
            it will be delivered within 1-4 hours and noon of the following day
            for rest of the country. Domestic Coverage: Continental has the
            largest sales and distribution network in Bangladesh, for example,
            there are 140 agencies in the Dhaka Metropolitan area. <br /> <br />
            <span className="title"> Distribution Process:</span>
          </p>
        </section>
        <section>
          <h1 className="text-background-head">International Coverage</h1>
          <p className="background-text">
            Through Continental Courier Services Ltd.’s International section,
            reliable, cost-effective and time-definite door-to-door express
            delivery is provided to worldwide destinations. Continental Courier
            Services covers all over the world, through its international hubs
            in Dubai, Singapore and India. Continental provides also import
            express services from India, Singapore, Hong Kong, China, Taiwan,
            and etc. Continental Courier Services Ltd maintains and ensures
            transit times and has strategic alliances with several top-ranking
            international couriers.
          </p>
        </section>
        <section>
          <h1 className="text-background-head">Structure</h1>
          <p className="background-text">
            <span className="title"> 1. Air Continental</span> <br /> <br />
            Air Continental is involved in overseas travel services. Engaged
            with many well-known domestic and international airlines and travel
            partners, a professionally trained staff aims to guide you through
            all your travel needs. Air Continental provides services for all
            essential travel needs including; airline ticket sales, visa
            processing, tour operation, hotel reservation and etc. <br /> <br />
            <span className="title"> 2. Continental Filling Station</span>
            <br /> <br /> The Continental Filling station is located at the
            outskirts of Dhaka City, on the way Dhaka-Chittagong highway, the
            busiest route in Bangladesh. Providing facilities of CNG, Diesel and
            Octane for all surface vehicles.
          </p>
        </section>
        <section>
          <h1 className="text-background-head">Board</h1>
          <p className="background-text">
            Managing Director: Mr. M. Nurul Imran Chisty has obtained his MBA
            from Victoria University USA. He has 20 years of experience in
            various fields of business mainly in Domestic and International
            Courier Services. He takes part in day-to-day business activities
            including company operations and financial administration. With his
            visionary leadership, he enters in innovative ventures and projects
            to promote the courier service right up to the doorsteps of the
            citizens living in the remotest places of Bangladesh. Not only so,
            Mr. Chisty aims to startup more innovative sister-concerns of
            Continental Courier as a part of Continental Group.
          </p>
        </section>
        <section>
          <h1 className="text-background-head">
            Corporate Social Responsibility (CSR)
          </h1>
          <p className="background-text">
            Being a reputed group, Continental has regular CSR practices, having
            contributed and developing many educational and religious institutes
            through its “Amin-Monuza Trust.” Continental also assists
            disadvantaged women from rural areas in the country, in order to
            eradicate poverty from the society. A brief list follows: <br />
            <br /> 1. Primary School: Ruhul Amin Chisty Primary School <br /> 2.
            Yusuf Ali Qari Hafizia Madrasah <br /> <br />
            <span className="title">Chisty Nibash Jame Masjid</span> <br />
            <br /> 1. Sewing Training Center for Women <br /> 2. Ruhul Amin
            Chisty Forkania Madrasah
          </p>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
