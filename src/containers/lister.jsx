import React, {Component} from 'react';
import PropTypes from 'prop-types';


import Card from '../components/card'

class Lister extends Component {

    goToWork = (work)=> {
        this.props.history.push('/' + this.props.match.params.category + '/'  + work.fields.slug)
    };

    render() {
        const {data} = this.props;

        const listerStyle = {
            flexDirection: 'row',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        };

        return (
            <div style={listerStyle}
                 className="m-2">
                {data.works.map(work =>
                    <Card 
                        work={work}
                        goToWork={this.goToWork}
                    />
                )}
            </div>
        )
    }
}

Lister.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Lister;
