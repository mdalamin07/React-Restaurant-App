import React from 'react';
import ContactColum from './ContactColum';

const Contact = () =>{
    return (
        <>
        <section className="contact pt-5">
            <div className="container mb-5">
                <div className="contact_head">
                    <h2>Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <div className="inner_contact py-5">
                <div className="container">
                    <div className="logo text-center mb-5">
                        <img src="image/logo.png" alt="logo" className="img-fluid text-center"/>
                    </div>
                    <div className="row mb-5">
                        <ContactColum
                            colHead="About Us"
                            colBody="Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes."
                        />
                        <ContactColum
                            colHead="New Menu"
                            colBody="Italian Bomba Sandwich,    Double Dose of Pork Belly ,  Spicy Thai Noodles,   Triple Truffle Trotters"
                        />
                        <ContactColum
                            colHead="Contact Us"
                            colBody="6 E Esplanade, St Albans VIC 3021, Australia
                                    +91 80005 89080
                                    support@foodfunday.com"
                        />
                        <ContactColum
                            colHead="Opening Hours"
                            colBody="Monday - Thursday

                                    11:00 AM - 9:00 PM 
                                    Friday - Saturday

                                    11:00 AM - 5:00 PM"
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;
