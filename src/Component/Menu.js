import React, { useState } from 'react';
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import LocalCafeOutlinedIcon from '@material-ui/icons/LocalCafeOutlined';
import LocalDrinkOutlinedIcon from '@material-ui/icons/LocalDrinkOutlined';
import MenuItem from './MenuComponent/MenuItem';
function Menu() {

    const [items, setItems] = useState(MenuItem)

    const filterItems = (catItems) => {
        const updateItems = MenuItem.filter((cuerElement) => {
            return cuerElement.category === catItems;
                
        });
        setItems(updateItems);
        
    }
    return (
        <>
        <section id="menu">
            <div className="container py-5">
                <div className="menu_head">
                    <h3 className="text-center">Our Menu</h3>
                    <p className="text-center"> There are many variations of passages of Lorem Ipsum available, but the majority <br/>
                    have suffered alteration in some form, by injected humour, or randomised words <br/>
                    which don't look even slightly believable.
                    </p>
                </div>
                <div className="menu_item mt-5">
                    <div className="container d-flex justify-content-around">
                        <button className="btn btn-outline-dark" onClick={() => filterItems("starters")}>
                            STARTERS<br/>
                                <LocalBarOutlinedIcon
                                    style={{fontSize: 40}}
                                />
                        </button>
                        <button className="btn btn-outline-dark" onClick={() => filterItems("main_dish")}>
                            MAIN DISHES<br/>
                                <FastfoodOutlinedIcon
                                    style={{fontSize: 40}}
                                />
                        </button>
                        <button className="btn btn-outline-dark" onClick={() => filterItems("deserts")}>
                            DESERTS<br/>                             
                                <LocalCafeOutlinedIcon
                                    style={{fontSize: 40}}
                                />
                        </button>
                        <button className="btn btn-outline-dark" onClick={() => filterItems("drinks")}>
                        DRINKS<br/>
                                <LocalDrinkOutlinedIcon
                                    style={{fontSize: 40}}
                                />
                        </button>
                    </div>
                </div>
                
                <div className="menu_item_displa">
                    <div className="container">
                        <div className="row">
                        {
                            items.map((element) => {
                                const {id, image, title, description, price} = element;

                                return(
                                    <div className="col-sm-12 col-md-6 mt-5" key={id} data-aos="fade-right" data-aos-duration="1000">
                                        <img src={image} alt={title} className="img-fluid"/>
                                        <div className="inner_div">
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                        </div>
                                        <div className="menu_span">
                                            <span>{price}</span>
                                        </div>
                                    </div>
                                )

                            })
                        }
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
}

export default Menu;
