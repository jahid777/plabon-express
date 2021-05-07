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

      <main className="container" style={{ marginTop: "100px" }}>
        <section>
          <h5 className="about-text-1" style={{ textAlign: "justify" }}>
            পৃথিবীর যে প্রান্ত থেকেই আসুন না কেনো আপনি; শুরুতেই আপনাকে আমাদের
            প্রতিষ্ঠানে স্বাগতম! একটি স্বনামধন্য প্রথম শ্রেনীর পরিবহন কোম্পানী
            "প্লাবন এক্সপ্রেস"। আমরা ঢাকা সহ সারা বাংলাদেশে যে কোন ধরনের গাড়ি
            ভাড়ার সার্ভিস দিয়ে থাকি!
          </h5>{" "}
          <br />
          <h5
            className="about-text-2"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              // color: "#8f8888",
            }}
          >
            {" "}
            সম্মানিত যাত্রীদের উদ্দেশ্যে বলছি—”একটি ভুল সারাজীবনের কান্না।”
          </h5>
          <br />
          <h5 className="about-text-3" style={{ textAlign: "justify" }}>
            রেফারেন্স ছাড়া রাস্তাঘাট থেকে কোন গাড়ি ভাড়া করবেন না। আপনি যে কোন
            সময় বিপদে পরতে পারেন। বিশ্বস্ত ও নির্ভরযোগ্য প্রতিষ্টান থেকে গাড়ি
            ভাড়া করুন। <br /> <br />
            একটি স্বনামধন্য প্রথম শ্রেনীর পরিবহন কোম্পানী "প্লাবন এক্সপ্রেস"।
            আমরা ঢাকা সহ সারা বাংলাদেশে যে কোন ধরনের গাড়ি ভাড়ার সার্ভিস দিয়ে
            থাকি! <br /> <br />
            পৃথিবীর যে প্রান্ত থেকেই আসুন না কেনো আপনি; শুরুতেই আপনাকে আমাদের
            প্রতিষ্ঠানে স্বাগতম! <br /> <br />
            আপনি আমাদের কাছে যেকোন ধরনের গাড়ী ভাড়া পাবেন। আমরা আপনাকে দিচ্ছি
            সকল প্রকার সম্পূর্ণ নতুন ফ্রেশ ডুয়েল এসি গাড়ী → হাইচ, নোহা,
            এক্স-নোহা, মাইক্রোবাস, প্রাইভেট কার, জিপ, এম্বুলেন্স, বাস, কোস্টার
            এবং পিকাপ , কভার ভ্যান সহ কার্গো সার্ভিস। আমরা আপনাকে সর্বনিম্ন রেটে
            গাড়ী ভাড়া দিচ্ছি। <br /> <br />
            You can rent any Car for us 24 hours a day. We are giving you the
            complete new Fresh Dual AC car → HiAce; Noha; X-Noha; Microbus;
            Private car; Zip, ambulance; Bus; Coaster and pickup, cover van with
            cargo service. We pay you the car at the lowest rate. <br /> <br />{" "}
            <br />
          </h5>
          <h5
            className="about-text-4"
            style={{ fontWeight: "bold", textAlign: "justify" }}
          >
            আমাদের প্রফেশনাল সার্ভিসের মধ্যে রয়েছেঃ{" "}
          </h5>
          <br />
          <p className="about-text-5" style={{ textAlign: "justify" }}>
            ১. দৈনিক এবং ঘন্টা হিসেবে গাড়ি ভাড়া। <br /> <br />
            ২. ডিসকাউন্ট প্রাইসে মাসিক ভিত্তিতে গাড়ি ভাড়া। <br /> <br /> ৩.
            এয়ারপোর্ট পিক-আপ ও ড্রপ সার্ভিস। ৪. বিয়ে, কনসার্ট সহ যেকোন ছোট-বড়
            অনুষ্ঠানের জন্য গাড়ি ভাড়া দেই। <br /> <br />
            ৫. অফিস/স্কুল/কলেজের জন্য পিক-ড্রপ সার্ভিস। মাসিক ভিত্তিতে অথবা কোনো
            পরীক্ষার রুটিন ভিক্তক। <br /> <br />
            ৬. হরতালে নিরাপদে যাতায়াতের জন্য এ্যাম্বুলেন্স ভাড়া। নিরাপদ সড়ক
            ব্যবহার করে অন্য অন্যান্য গাড়ি ভাড়া দেওয়া হয়। <br /> <br />
            ৭. বাসা বদলের জন্য লেবার সহ পিকআপ ভাড়া দেওয়া হয়। (যদি লেবার
            প্রয়োজন হয় তখন)
          </p>
          <br /> <br />
          <h5
            className="about-text-6"
            style={{ fontWeight: "bold", textAlign: "justify" }}
          >
            {" "}
            কেনো আমাদের সার্ভিস নেবেনঃ
          </h5>{" "}
          <br />
          <p className="about-text-7" style={{ textAlign: "justify" }}>
            (১). অল-টাইম গাড়ি পাওয়ার নিশ্চয়তাসহ, পরিস্কার-পরিচ্ছন্ন গাড়ি,
            ভদ্র ও অভিজ্ঞ ড্রাইভার, ঝামেলাহীন সার্ভিস। <br /> <br /> (২).
            কমপক্ষে পাঁচ বছরের অভিজ্ঞতা সম্পন্ন; শতভাগ নিশ্চিত ড্রাইভিংর
            লাইসেন্স করা; ড্রাইভার দ্বারা গাড়ির পরিচালনা করি। <br /> <br />
            (৩).বিকাশের; রকেট; নগদের মাধ্যমে ঘরে বসে অনলাইন বুকিং এবং পেমেন্ট।{" "}
            <br /> <br />
            (৪). নির্ধারিত সময়ের পর ও গাড়ির সেবা প্রয়োজন হলে; ওভার এক্সট্রা
            সময় দিয়ে আমরা আপনাকে সঠিক সেবা দেয়ার চেষ্টা করি। <br /> <br />
            (৫). চাইলে আপনি নিজেই গাড়ির গ্যাসের ও (যেখানে গ্যাস নেই তৈল ব্যবহার
            ব্যবস্থা রয়েছে) খরচ বহন করতে পারবেন এবং নিজের ইচ্ছে মত গাড়ি
            ব্যবহার করতে পারবেন। <br /> <br />
            (৬) গাড়ীতে ভ্রমণের সময় যে কোন রকম অসুবিধার জন্য ২৪ ঘন্টা যোগাযোগের
            ব্যবস্থা রয়েছে আমাদের সাথে। <br /> <br />
            (৭) ড্রাইভার ও তার গাড়ীর কোনো ত্রুটি দেখলে; আমাদের অবহিত করুন। সাথে
            সাথে গাড়ী রিপ্লেসমেন্ট করে দেওয়া হবে।
            <br /> <br /> (৮) গাড়ীতে ড্রাইভার কোনো প্রকার বিড়ি/সিগারেট! নিলে
            আমাদের অবহিত করুন। তবে আমাদের ড্রাইভার গন কখনই গাড়ির মধ্যে বা
            সার্ভিসের সময় সিগারেটে বা তামাকজাত পন্য সেবন করেন না। <br /> <br />
            (৯) যাত্রার সময় গাড়ীতে কোনো প্রকারের অপরিষ্কার দেখলে; আমাদের অবহিত
            করলে। রিপ্লেসমেন্ট করা হয় সাথে সাথে। <br /> <br />
            (১০) গাড়ির মধ্যে নিরাপত্তা সভিস হিসেবে ২৪ ঘন্টা GPRS সুবিধা রয়েছে।
            করোনা ভাইরাস সংক্রমণের একটা বড় মাধ্যম হতে পারে অস্বাস্থ্যকর
            গণপরিবহন! তাই নিজের ও আপনজন-দের সুস্থতা নিশ্চিত করতে অপরিষ্কৃত ও
            জনবহুল পরিবহনগুলো এড়িয়ে চলার অনুরোধ করছি! নিজে সুস্থ থাকি , অপরকেও
            সুস্থ রাখার চেষ্টা করি !
          </p>
        </section>
      </main>
    </>
  );
};

export default AboutUs;

// <h1 className="text-background-head">Background</h1>
// <p className="background-text">
//   Continental Group began its journey in 1977 with “Continental
//   Progressive Industries Ltd.” However, the major portfolio of
//   Continental Group, “Continental Courier Services LTD, inaugurated in
//   1983. Late M. Ruhul Amin Chisty, former chairman of Continental
//   Group, has pioneered the concept of courier services in Bangladesh,
//   starting with only 14 sales and distribution stations and a
//   workforce of 45 employees (at the time of inception). <br /> <br />
//   Continental Courier Services has built its market by providing
//   door-to-door document and parcel delivery within the shortest
//   possible time, a service that was not available in Bangladesh at the
//   time of its inception. As a result, the market grew rapidly and
//   others followed the footsteps of Continental, but Continental
//   remains at the top in terms of market share and assures the best
//   quality of service in the country, till date. Rapidly expanding its
//   network all over Bangladesh, Continental is still the largest
//   network in the country.
// </p>
// </section>

// <section className="row">
// <div className="col-md-8">
//   <h1 className="text-background-head">
//     Continental Courier Services LTD
//   </h1>
//   <p className="background-text">
//     Continental Courier Service began its operations with no more than
//     45 employees divided between 14 sales and distribution stations.
//     Today, Continental Courier Service holds its reputation with
//     thousands of employees, sub-agencies, sales and distribution
//     stations; withholding its place of the largest courier network in
//     Bangladesh.
//   </p>
// </div>
// <div className="col-md-4">
//   <img
//     style={{ height: "180px", marginTop: "40px" }}
//     src={continentalImg}
//     alt=""
//   />
// </div>
// </section>

// <section>
// <h1 className="text-background-head">Continental Courier Services</h1>
// <p className="background-text">
//   <span className="title">Courier Services:</span> The first of its
//   kind in the country, it was established in the year 1983. Over a
//   period of 33 years, the company grew with 114 zonal offices and
//   thousands of sub-agencies, run by a well-trained workforce, covering
//   even the most remote places in the country.
//   <br /> <br />
//   <span className="title">Parcel Services:</span> Starting its
//   operations in 2004 with only 24 vehicles, Continental Parcel Service
//   has widened its network with the help of a growing number of
//   vehicles. For its safe, quick and timely delivery, Continental
//   Parcel Service is trusted by the largest companies of Bangladesh for
//   the distribution of their products and equipment’s.
//   <br />
//   <br />
//   <span className="title"> Innovation of Continental Courier:</span>
//   <br />
//   <br />
//   a) On Board Courier (OBC): ‘On Board Courier’ is an initiative of
//   Continental Courier Service. Though OBC, Continental organizes and
//   ensures delivery of its customers’ consignment within division and
//   inter-division, rather than receiving all its consignments in the
//   central sorting station at Dhaka. Furthermore, a staff member is
//   designated with every shipment to ensure on-time delivery. b)
//   Weather Proof Bag: “Weather and Pilferage Proof” bags, also known as
//   “Poly Bags” are used in order to ensure protection of our customers’
//   consignments. Multiple sizes are provided as per the requirement of
//   customers. c) Top Urgent Service: ‘Top Urgent’ services for are
//   provided for customers who need an immediate delivery for their
//   documents. Under this service, if a document is shipped Dhaka-Dhaka,
//   it will be delivered within 1-4 hours and noon of the following day
//   for rest of the country. Domestic Coverage: Continental has the
//   largest sales and distribution network in Bangladesh, for example,
//   there are 140 agencies in the Dhaka Metropolitan area. <br /> <br />
//   <span className="title"> Distribution Process:</span>
// </p>
// </section>
// <section>
// <h1 className="text-background-head">International Coverage</h1>
// <p className="background-text">
//   Through Continental Courier Services Ltd.’s International section,
//   reliable, cost-effective and time-definite door-to-door express
//   delivery is provided to worldwide destinations. Continental Courier
//   Services covers all over the world, through its international hubs
//   in Dubai, Singapore and India. Continental provides also import
//   express services from India, Singapore, Hong Kong, China, Taiwan,
//   and etc. Continental Courier Services Ltd maintains and ensures
//   transit times and has strategic alliances with several top-ranking
//   international couriers.
// </p>
// </section>
// <section>
// <h1 className="text-background-head">Structure</h1>
// <p className="background-text">
//   <span className="title"> 1. Air Continental</span> <br /> <br />
//   Air Continental is involved in overseas travel services. Engaged
//   with many well-known domestic and international airlines and travel
//   partners, a professionally trained staff aims to guide you through
//   all your travel needs. Air Continental provides services for all
//   essential travel needs including; airline ticket sales, visa
//   processing, tour operation, hotel reservation and etc. <br /> <br />
//   <span className="title"> 2. Continental Filling Station</span>
//   <br /> <br /> The Continental Filling station is located at the
//   outskirts of Dhaka City, on the way Dhaka-Chittagong highway, the
//   busiest route in Bangladesh. Providing facilities of CNG, Diesel and
//   Octane for all surface vehicles.
// </p>
// </section>
// <section>
// <h1 className="text-background-head">Board</h1>
// <p className="background-text">
//   Managing Director: Mr. M. Nurul Imran Chisty has obtained his MBA
//   from Victoria University USA. He has 20 years of experience in
//   various fields of business mainly in Domestic and International
//   Courier Services. He takes part in day-to-day business activities
//   including company operations and financial administration. With his
//   visionary leadership, he enters in innovative ventures and projects
//   to promote the courier service right up to the doorsteps of the
//   citizens living in the remotest places of Bangladesh. Not only so,
//   Mr. Chisty aims to startup more innovative sister-concerns of
//   Continental Courier as a part of Continental Group.
// </p>
// </section>
// <section>
// <h1 className="text-background-head">
//   Corporate Social Responsibility (CSR)
// </h1>
// <p className="background-text">
//   Being a reputed group, Continental has regular CSR practices, having
//   contributed and developing many educational and religious institutes
//   through its “Amin-Monuza Trust.” Continental also assists
//   disadvantaged women from rural areas in the country, in order to
//   eradicate poverty from the society. A brief list follows: <br />
//   <br /> 1. Primary School: Ruhul Amin Chisty Primary School <br /> 2.
//   Yusuf Ali Qari Hafizia Madrasah <br /> <br />
//   <span className="title">Chisty Nibash Jame Masjid</span> <br />
//   <br /> 1. Sewing Training Center for Women <br /> 2. Ruhul Amin
//   Chisty Forkania Madrasah
// </p>
