import React from 'react'

const Reservaion = () => {
    return (
        <>
        <section className="reserv py-5">
            <div className="container">
                <div className="reserv_head mb-5">
                    <h2 className="text-center">Reservations</h2>
                </div>
                <div className="reserv_from">
                    <div className="row">
                        <div className="col-md-8 mx-auto" data-aos="fade-right" data-aos-duration="1000">
                            <h4 className="mb-2">BOOKING FORM</h4>
                            <p className="mb-5">PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>
                            <form class="row gx-3 gy-2 align-items-center">
                                <div class="col-sm-6">
                                    <input type="text" class="form-control py-3 mb-3" id="specificSizeInputName" placeholder="Name"/>
                                </div>
                                <div class="col-sm-6">
                                    <input type="email" class="form-control py-3 mb-3" id="specificSizeInputName" placeholder="Email"/>
                                </div>
                                <div class="col-sm-6">
                                    <input type="number" class="form-control py-3 mb-3" id="specificSizeInputName" placeholder="Contact No."/>
                                </div>
                                <div class="col-sm-6">
                                    <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                                    <select class="form-select py-3 mb-3" id="specificSizeSelect">
                                    <option selected>No.of Person</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    </select>
                                </div>
                                <div class="col-sm-6">
                                    <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                                    <select class="form-select py-3 mb-3" id="specificSizeSelect">
                                    <option selected>Preferred Food</option>
                                    <option value="1">Banglai</option>
                                    <option value="2">Indian</option>
                                    <option value="3">Mixican</option>
                                    </select>
                                </div>
                                <div class="col-sm-6">
                                    <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                                    <select class="form-select py-3 mb-3" id="specificSizeSelect">
                                    <option selected>Occasion</option>
                                    <option value="1">Wedding</option>
                                    <option value="2">Birthday</option>
                                    <option value="3">Anniversary</option>
                                    </select>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="autoSizingCheck2"/>
                                    <label class="form-check-label" for="autoSizingCheck2">
                                        Remember me
                                    </label>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Reservaion;
