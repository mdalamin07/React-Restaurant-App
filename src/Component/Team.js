import React from 'react';
import TeamData from "../Component/TeamData";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Team = () => {    
    return (
        <>
        <section className="team py-5">
            <div className="container">
                <div className="team_head">
                    <h2 className="text-center">Our Team</h2>
                    <p className="text-center">
                    There are many variations of passages of Lorem Ipsum available, but the majority <br/>
                    have suffered alteration in some form, by injected humour, or randomised words <br/>
                    which don't look even slightly believable.
                    </p>
                </div>
                <div className="team_member pt-3">
                    <div className="row">
                        {
                            TeamData.map ((elem) => {
                                const {id, name, image, description} = elem;
                                return(
                                    <div className="col-sm-12 col-md-4 mb-5 my_team" key={id} data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="card">
                                            <img src={image} className="card-img-top" alt="member"/>
                                            <div className="card-body">
                                                <h3 className="card-title text-center">{name}</h3>
                                                <p className="card-text text-center">{description}</p>
                                                <hr/>
                                            </div>
                                            <div className="team_social_icon text-center">
                                                <FacebookIcon
                                                    style={{fontSize:"30",backgroundColor:"#fff", padding:"1", borderRadius:"50%", marginRight:"10",cursor:"pointer"}}
                                                />
                                                <TwitterIcon
                                                    style={{fontSize:"30",backgroundColor:"#fff", padding:"1", borderRadius:"50%", marginRight:"10",cursor:"pointer"}}
                                                />
                                                <LinkedInIcon
                                                    style={{fontSize:"30",backgroundColor:"#fff", padding:"1", borderRadius:"50%",cursor:"pointer"}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                                
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Team;
