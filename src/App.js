import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import ServicePage from "./ServicePage";
import ContactUs from "./ContactUs.js";

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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
