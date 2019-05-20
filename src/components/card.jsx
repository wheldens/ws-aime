import React from 'react';
import styled from 'styled-components';

const Card = ({work, goToWork}) => {

    const Wrapper = styled.section`
        width: 300px;
        `;

    return (
        <Wrapper>
            <div className="card m-2" onClick={() => goToWork(work)}>
                <img src={work.fields.image.fields.file.url + '?w=300'} className="card-img-top" alt="placekitten"/>
                <div className="card-body">
                    <h5 className="card-title">{work.fields.titleWork}</h5>
                    <p className="card-text">{work.fields.description}</p>
                </div>
            </div>
        </Wrapper>
    )
};
export default Card;
