import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "./image/logo.png";
import DehazeIcon from '@material-ui/icons/Dehaze';
import * as Scroll from 'react-scroll';
const Navbar =() => {
    let Link = Scroll.Link;
    const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 90 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['Navbar'];
  if(scrolled){
    x.push('scrolled');
  }
    return (
        <>
            <div className={x.join(" ")}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={Logo} alt="logo"/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <DehazeIcon
                                style={{fontSize:"30",color:"#e75b1e"}}
                            />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact activeClassName="mylink" className="nav-link" aria-current="page" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="mylink" className="nav-link" to="/about">ABOUT US</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="mylink" className="nav-link" to="/menu">MENU</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="mylink" className="nav-link" to="/team">TEAM</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="mylink" className="nav-link" to="/gallery">GALLERY</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="mylink" className="nav-link" to="/blog">BLOG</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="mylink" className="nav-link" to="/pricing">PRICING</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="mylink" className="nav-link" to="/reservation">RESERVATION</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="mylink" className="nav-link" to="/contact">CONTACT US</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}

export default Navbar;
