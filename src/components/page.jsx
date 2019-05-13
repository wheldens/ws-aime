import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Lister from './lister'
import Header from '../components/header';

class Page extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <main className="container">
                    <Lister/>
                </main>
            </React.Fragment>
        );
    }
}

Page.propTypes = {};

export default Page;
