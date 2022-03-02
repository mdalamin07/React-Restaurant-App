import React from 'react'

const ContactColum = (props) => {
    return (
        <>
            <div className="col-sm-12 col-md-3 mb-3" data-aos="fade-right" data-aos-duration="1000">
                <div className="col_head">
                    {props.colHead}
                </div>
                <div className="col_body">
                    {props.colBody}
                </div>
            </div> 
        </>
    )
}

export default ContactColum;
