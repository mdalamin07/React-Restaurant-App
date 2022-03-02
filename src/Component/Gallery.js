import React from 'react';
// import Lightbox from "react-awesome-lightbox";
// // You need to import the CSS only once
// import "react-awesome-lightbox/build/style.css";

const Gallery = () => {
    // const images = [
    //     {
    //         url:"image/gallery_01.jpg",
    //     },
    //     {
    //         url:"image/gallery_02.jpg",
    //     },
    //     {
    //         url:"image/gallery_03.jpg",
    //     },
    // ]
    return (
        <>
        <section className="gallery py-5">
            <div className="gallery_head">
                <h2 className="text-center">Our Gallery</h2>
                <p className="text-center">There are many variations of passages of Lorem Ipsum available </p>
            </div>
            <div className="main_gallery pt-5">
            <div className="container">
                <div className="row">
                {/* <Lightbox images={images}/> */}
                    <div className="col-md-8 p-0">
                        <img src="image/gallery_01.jpg" alt="gallery_img" className="img-fluid gallery_item"/>
                    </div>
                    <div className="col-md-4 p-0">
                        <img src="image/gallery_02.jpg" alt="gallery_img" className="img-fluid gallery_item"/>
                    </div>
                    <div className="col-md-4 p-0">
                        <img src="image/gallery_03.jpg" alt="gallery_img" className="img-fluid gallery_item"/>
                    </div>
                    <div className="col-md-4 p-0">
                        <img src="image/gallery_04.jpg" alt="gallery_img" className="img-fluid gallery_item"/>
                    </div>
                    <div className="col-md-4 p-0">
                        <img src="image/gallery_05.jpg" alt="gallery_img" className="img-fluid gallery_item"/>
                    </div>
                    <div className="col-md-4 p-0">
                        <img src="image/gallery_06.jpg" alt="gallery_img" className="img-fluid gallery_item"/>
                    </div>
                    <div className="col-md-8 p-0">
                        <img src="image/gallery_07.jpg" alt="gallery_img" className="img-fluid gallery_item"/>
                    </div>
                    <div className="col-md-4 p-0">
                        <img src="image/gallery_08.jpg" alt="gallery_img" className="img-fluid gallery_item"/>
                    </div>
                    <div className="col-md-4 p-0">
                        <img src="image/gallery_09.jpg" alt="gallery_img" className="img-fluid gallery_item"/>
                    </div>
                    <div className="col-md-4 p-0">
                        <img src="image/gallery_10.jpg" alt="gallery_img" className="img-fluid gallery_item"/>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}

export default Gallery;
