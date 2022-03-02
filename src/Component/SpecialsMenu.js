import React from 'react';
const SpecialsMenu = () => {
    return (
        <>
           <div className="bottom_about text-center mt-5 py-5">
                <div className="container">
                    <h4>Today's Special</h4>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut<br/>
                    labore et dolore magna aliqua.Ut enim ad minim venia,nostrud exercitation ullamco.
                    </p>
                    {/* Carousal Add */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-sm-12 col-md-4 mb-3">
                                        <img src="image/special-menu-1.jpg" alt="special_1" className="img-fluid"/>
                                        
                                    </div>
                                    <div className="col-sm-12 col-md-4 mb-3">
                                        <img src="image/special-menu-2.jpg" alt="special_2" className="img-fluid"/>
                                    </div>
                                    <div className="col-sm-12 col-md-4 mb-3">
                                        <img src="image/special-menu-3.jpg" alt="special_3" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-sm-12 col-md-4 mb-3">
                                        <img src="image/special-menu-3.jpg" alt="special_3" className="img-fluid"/>
                                        
                                    </div>
                                    <div className="col-sm-12 col-md-4 mb-3">
                                        <img src="image/special-menu-2.jpg" alt="special_2" className="img-fluid"/>
                                    </div>
                                    <div className="col-sm-12 col-md-4 mb-3">
                                        <img src="image/special-menu-1.jpg" alt="special_1" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default SpecialsMenu;
