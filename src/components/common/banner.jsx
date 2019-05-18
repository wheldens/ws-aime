import React from 'react';

const Banner = ({heading, desc, img}) => {

    const backGroundImg = {
        backgroundSize:'cover',
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center'
    };

    return (
        <div className="jumbotron jumbotron-fluid banner" style={backGroundImg}>
            <div className="container textBlock">
                <h1 className="display-4">{heading}</h1>
                <p className="lead">{desc}</p>
            </div>
        </div>
    );
};

export default Banner;
