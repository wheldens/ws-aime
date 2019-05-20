import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import NotFound from "./components/not-found";
import Home from "./containers/home";
import Pdp from "./containers/pdp";

// components
import Page from './containers/page'
import Navbar from './containers/navbar'
import FooterContainer from "./components/footer_container";

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

                <FooterContainer/>
            </React.Fragment>
        );
    }
}

export default App;


