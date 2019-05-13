import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Card from './card'

class Lister extends Component {


    render() {

        const listerStyle = {
            flexDirection: 'row',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        };

        return (
            <div
                style={listerStyle}
                className="m-2"
            >

                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>


            </div>
        );
    }
}

Lister.propTypes = {};

export default Lister;
