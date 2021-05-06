import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import ServicePage from "./ServicePage";
import ContactUs from "./ContactUs.js";
import Transport from "./AllServices/Transport";
import PrivateCar from "./AllServices/PrivateCar";
import Ambulance from "./AllServices/Ambulance";
import Cargo from "./AllServices/Cargo";
import Shipping from "./AllServices/Shipping";
import Excavator from "./AllServices/Excavator";
import Bulldozer from "./AllServices/Bulldozer";
import TrackProduct from "./TrackProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/servicePage">
          <ServicePage />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/transport">
          <Transport />
        </Route>
        <Route path="/privateCar">
          <PrivateCar />
        </Route>
        <Route path="/ambulance">
          <Ambulance />
        </Route>
        <Route path="/cargo">
          <Cargo />
        </Route>
        <Route path="/shipping">
          <Shipping />
        </Route>
        <Route path="/excavator">
          <Excavator />
        </Route>
        <Route path="/bulldozer">
          <Bulldozer />
        </Route>

        <Route path="/trackProduct">
          <TrackProduct />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
