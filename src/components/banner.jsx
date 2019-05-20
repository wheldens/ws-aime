import React from 'react';
import styled from 'styled-components';

const Banner = ({heading, desc, img}) => {

    const TextBlock = styled.div`
        max-width: 800px;
        background-color: white;
        padding: 20px;
        border-radius: $border-radius-sm;`;

    const Banner = styled.div`  
            position: relative;
            &::before {
                content: "";
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background-size: cover;
                background-image: url(${img}?w=1200);
                background-position: center;
                filter: grayscale(100%);
            }`;

    const BannerInside = styled.div`
     position: relative;`;

    return (
        <Banner className="jumbotron jumbotron-fluid banner">
            <BannerInside>
                <TextBlock className="container">
                    <h1 className="display-4">{heading}</h1>
                    <p className="lead">{desc}</p>
                </TextBlock>
            </BannerInside>
        </Banner>
    );
};

export default Banner;
