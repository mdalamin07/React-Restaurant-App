import React from 'react';
import BlogData from "./BlogData";

const Blog = () =>{
    return (
        <>
        <section className="blog py-5">
            <div className="container">
                <div className="blog_head mb-5">
                    <h3 className="text-center">Our Blog</h3>
                </div>
                <div className="row blog_card">
                {
                    BlogData.map((e) => {
                        const {id,image,title,deccription,name} = e;
                        return(
                            <div className="col-md-6"data-aos="zoom-in" data-aos-duration="1000">
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4" key={id}>
                                        <img src={image} className="img-fluid rounded-start" alt={name}/>
                                        </div>
                                        <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text description">{deccription}</p>
                                            <p className="card-text"><small className="text-muted">{name}</small></p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Blog;
