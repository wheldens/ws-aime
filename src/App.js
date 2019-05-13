import React, {Component} from 'react';
import './styling/components/App.scss';

import * as contentful from 'contentful'

// components
// import Navbar from './components/navbar'
import Page from './components/page'


class App extends Component {


    client = contentful.createClient({
            space: 'z1ydzalb7kpj',
            accessToken: '5F2MrOCUIXjig420deajpubocE3qG02Y6Xy6vN00VJk'
        }
    );


    state = {
        contentful: {
            homepage: {}
        }
    };

    componentDidMount() {
        this.fetchContentful().then(this.setContentful);
    }

    fetchContentful = () => this.client.getEntries({
        content_type: 'contentPage'
    });

    setContentful = response => {

        this.setState({
            contentful: {homepage: response.items[0].fields}
        });

        console.log('s: ', this.state);
    };


    render() {
        return (
            <React.Fragment>
                <Page/>
            </React.Fragment>
        );
    }
}


export default App;


