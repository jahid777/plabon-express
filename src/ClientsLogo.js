import React from "react";
import s1 from "./image/F-1.jpg";
import s2 from "./image/F-2.jpg";
import s3 from "./image/F-3.jpg";
import s4 from "./image/F-4.jpg";
import s5 from "./image/F-5.jpg";
import s6 from "./image/F-6.jpg";
import s7 from "./image/F-7.jpg";
import s8 from "./image/F-8.jpg";
import s9 from "./image/C9.png";

const ClientsLogo = () => {
  return (
    <section className="container">
      <h1
        style={{
          textAlign: "center",
          color: "#5f2da0",
          fontWeight: "bold",
          marginTop: "70px",
          marginBottom: "25px",
        }}
      >
        OUR SERVICE
      </h1>
      <div
        id="carouselExampleIndicators"
        class="carousel slide carousel-fade"
        data-ride="carousel"
        data-interval="500"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              style={{ height: "400px" }}
              src={s1}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              style={{ height: "400px" }}
              src={s2}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              style={{ height: "400px" }}
              src={s3}
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};

export default ClientsLogo;

// import React from "react";
// import c1 from "./image/C1.png";
// import c2 from "./image/C2.png";
// import c3 from "./image/C3.png";
// import c4 from "./image/C4.png";
// import c5 from "./image/C5.png";
// import c6 from "./image/C6.png";
// import c7 from "./image/C7.png";
// import c8 from "./image/C8.png";
// import c9 from "./image/C9.png";
// import c10 from "./image/C10.png";
// import c11 from "./image/C11.png";
// import c12 from "./image/C12.png";
// import c13 from "./image/C13.png";
// import c14 from "./image/C14.png";
// import c15 from "./image/C15.png";
// import c16 from "./image/C16.png";
// import "./ClientsLogo.css";

// const ClientsLogo = () => {
//   return (
//     <section>
//       <h1
//         style={{
//           textAlign: "center",
//           color: "#5f2da0",
//           fontWeight: "bold",
//           marginTop: "70px",
//           marginBottom: "25px",
//         }}
//       >
//         Our Valuable Clients
//       </h1>
//       <div
//         id="carouselExampleIndicators"
//         class="carousel slide carousel-fade"
//         data-ride="carousel"
//       >
//         <ol class="carousel-indicators">
//           <li
//             data-target="#carouselExampleIndicators"
//             data-slide-to="0"
//             class="active"
//           ></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//         </ol>
//         <div class="carousel-inner container">
//           <div
//             class="carousel-item active  row d-flex container logo-box"
//             style={{
//               marginBottom: "80px",
//             }}
//           >
//             <div className="col-md-3 ">
//               <img className="img-size" src={c1} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c2} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c3} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c4} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c5} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c6} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c7} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c8} alt="" />
//             </div>
//           </div>
//           <div
//             class="carousel-item row d-flex container logo-box"
//             style={{
//               //   justifyContent: "center",
//               marginBottom: "80px",
//             }}
//           >
//             <div className="col-md-3 ">
//               <img className="img-size" src={c9} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c10} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c11} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c12} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c13} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c14} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c15} alt="" />
//             </div>

//             <div className="col-md-3 ">
//               <img className="img-size" src={c16} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientsLogo;
