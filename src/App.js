import React from 'react';
import {Switch,Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// Import Component FIle
import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import About from "./Component/About";
import Menu from "./Component/Menu";
import Team from "./Component/Team";
import Gallery from "./Component/Gallery";
import Blog from "./Component/Blog";
import Pricing from "./Component/Pricing";
import Reservaion from "./Component/Reservaion";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
// Import css file
import "./Component/css/style.scss";
// Import AOS Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/team" component={Team}/>
      <Route exact path="/gallery" component={Gallery}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/pricing" component={Pricing}/>
      <Route exact path="/reservation" component={Reservaion}/>
      <Route exact path="/contact" component={Contact}/>
      {/* <Redirect to="/"/> */}
    </Switch>
    <Footer/>
    </>
  )
}

export default App;
