import React from 'react';

const Card = ({work, goToWork}) => {

        const cardStyle = {
            width: 300,
        };

        return (
            <div className="card m-2" style={cardStyle} onClick={() => goToWork(work)}>
                <img src={work.fields.image.fields.file.url} className="card-img-top" alt="placekitten"/>
                <div className="card-body">
                    <h5 className="card-title">{work.fields.titleWork}</h5>
                    <p className="card-text">{work.fields.description}</p>
                </div>
            </div>
        )
};
export default Card;
