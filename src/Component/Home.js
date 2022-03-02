import React from 'react';
import { NavLink } from 'react-router-dom';
import Typical from 'react-typical';

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="container text-center my_home">
                    <h1>Dinner with us 
                    <Typical
                    wrapper="span"
                    loop={Infinity}
                    steps={['Friends', 1500,'Family', 1500,'Officemates', 1500,]}
                    />
                    </h1>
                    <h2>Accidental appearances </h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod</p>
                    <NavLink to="/reservaion" className="btn my_btn" data-aos="zoom-in" data-aos-duration="1000">BOOK MY TABLE</NavLink>
                    <NavLink to="/about" className="scroll_down">
                        <div className="mouse">
                            <span></span>
                        </div>
                    </NavLink>
                </div>
            </section>
        </>
    )
}

export default Home;
