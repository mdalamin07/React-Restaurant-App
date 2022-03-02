import React from 'react';
import PricingData from './PricingData';

const Pricing = () => {
    return (
        <section className="pricing py-5">
            <div className="container">
                <div className="pricing_head">
                    <h2 className="text-center py-3">
                        Pricing
                    </h2>
                    <p className="text-center"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci varius, elementum <br/>
                        lectus nec, aliquam lectus. Duis neque augue, maximus in sapien ut, porta pharetra <br/>
                        odio.
                    </p>
                </div>
                <div className="pricing_card">
                    <div className="row">
                        {
                            PricingData.map((elm) =>{
                                const {id, image, title} = elm;
                                return(
                                    <div className="col-md-4 mb-5" key={id} data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="card">
                                            <div className="card_top">
                                            <img src={image} className="card-img-top img-fluid pricing_img" alt="pricing_img"/>
                                            <p>{title}</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">An item</li>
                                                <li className="list-group-item">A second item</li>
                                                <li className="list-group-item">A third item</li>
                                                <li className="list-group-item">A fourth item</li>
                                                <li className="list-group-item">A five item</li>
                                                <li className="list-group-item">A six item</li>
                                            </ul>
                                            <button>
                                                Purchase Now!
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;
