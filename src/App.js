import "./App.css";
import cp from "./Components/contactPage/contactpage";
import contactUs from "./Components/contactus/cu";
import Navbar from "./Components/Navbar/navbar";
import CareerMainPage from "./Components/careerMain/careerMainpage";
import HomePage from "./Components/homepage/homepage";
import CareerIndividual from "./Components/careerParticular/CareerIndividual";
import HofarsIP from "./Components/hofarsInternship/hip";
import About from "./Components/AboutUs/About.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Footer from "./Components/footer/footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/contact" exact component={cp} />
          <Route path="/careers/:id" exact component={CareerIndividual} />
          <Route path="/careers" exact component={CareerMainPage} />
          <Route path="/about" exact component={About} />
          <Route path="/hip" exact component={HofarsIP} />
          <Redirect path="/" exact to="/home" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
