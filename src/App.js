import "./App.css";
import cp from "./Components/contactPage/contactpage";
import contactUs from "./Components/contactus/cu";
import Navbar from "./Components/Navbar/navbar";
import CareerMainPage from "./Components/careerMain/careerMainpage";
import HomePage from "./Components/homepage/homepage";
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
          <Route path="/careers" exact component={CareerMainPage} />
          <Redirect path="/" exact to="/home" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
