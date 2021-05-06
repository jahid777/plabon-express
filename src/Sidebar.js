import React from "react";
import "./Sidebar.css";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
const Sidebar = () => {
  // let { path, url } = useRouteMatch();

  // console.log(path);
  // console.log(url);
  return (
    <div className="sidebar">
      <ul className="list-unstyled">
        <NavLink activeClassName="selected selectedNav" to={`/transport`}>
          <li className="li-design">
            <div className="sidebar-button"></div>{" "}
            <span className="sidebar-span"> TRANSPORT </span>
          </li>
        </NavLink>
        <NavLink activeClassName="selected selectedNav" to={`/privateCar`}>
          <li className="li-design">
            <div className="sidebar-button"></div>{" "}
            <span className="sidebar-span"> PRIVATE CAR </span>
          </li>
        </NavLink>

        <NavLink activeClassName="selected selectedNav" to={`/ambulance`}>
          <li className="li-design">
            <div className="sidebar-button"></div>{" "}
            <span className="sidebar-span"> AMBULANCE </span>
          </li>
        </NavLink>
        <NavLink activeClassName="selected selectedNav" to={`/cargo`}>
          <li className="li-design">
            <div className="sidebar-button"></div>{" "}
            <span className="sidebar-span"> CARGO </span>
          </li>
        </NavLink>
        <NavLink activeClassName="selected selectedNav" to={`/shipping`}>
          <li className="li-design">
            <div className="sidebar-button"></div>{" "}
            <span className="sidebar-span"> SHIPPING </span>
          </li>
        </NavLink>
        <NavLink activeClassName="selected selectedNav" to={`/excavator`}>
          <li className="li-design">
            <div className="sidebar-button"></div>{" "}
            <span className="sidebar-span"> EXCAVATOR </span>
          </li>
        </NavLink>
        <NavLink activeClassName="selected selectedNav" to={`/bulldozer`}>
          <li className="li-design">
            <div className="sidebar-button"></div>{" "}
            <span className="sidebar-span"> BULLDOZER </span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
