import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Card extends Component {


    render() {


        const cardStyle = {
            width: 300,
        };

        return (
            <div className="card m-2" style={cardStyle}>
                <img src="http://placekitten.com/g/250/200" className="card-img-top" alt="placekitten"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the
                        bulk of the card's content.</p>
                    <a href="www.iets.nl" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}

Card.propTypes = {};

export default Card;
