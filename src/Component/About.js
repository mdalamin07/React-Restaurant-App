import React from 'react';
// Import Specials Menu
import SpecialsMenu from './SpecialsMenu';

const About = () => {
    return (
        <>
        <section id="about">
            <div className="container py-5">
                <div className="row inner_about">
                    <div className="col-md-6 col-sm-12" data-aos="fade-right" data-aos-duration="1000">
                        <h2>About Us</h2>
                        <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco. </p>

                        <p> Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu set magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat massa quis enim. Donec vitae sapien ut libero venenatis fauci Nullam quis ante. Etiam sit amet rci eget eros. </p>

                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco. </p>
                    </div>
                    <div className="col-md-6 col-sm-12 about_img" data-aos="fade-left" data-aos-duration="1000">
                        <img src="image/about-main.jpg" alt="about_img" className="img-fluid img-thumbnail"/>
                        <div className="about_img2">
                            <img src="image/about-inset.jpg" alt="about_img2" className="img-fluid img-thumbnail"/>
                        </div>
                    </div>
                </div>
            </div>
            <SpecialsMenu/>
        </section>
        </>
    )
}

export default About;
