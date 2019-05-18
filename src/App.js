import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import NotFound from "./components/not-found";
import Home from "./components/home";
import Pdp from "./components/pdp";

import './styling/components/App.scss';

// components
import Page from './components/page'
import Navbar from './components/navbar'

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar/>

                <div className="content">
                    <Switch>
                        <Route path="/not-found" component={NotFound}/>
                        <Route path="/:category/:work" component={Pdp}/>
                        <Route path="/:category" component={Page}/>
                        <Route path="/" exact component={Home}/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default App;


