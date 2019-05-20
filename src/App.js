import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import NotFound from "./components/not-found";
import Login from "./components/login";
import Home from "./containers/home";
import Pdp from "./containers/pdp";
import {Link} from "react-router-dom";


// components
import Page from './containers/page'
import Navbar from './containers/navbar'
import FooterContainer from "./components/footer_container";

import 'bootstrap';
import ProptectedRoute from "./components/common/ProptectedRoute";

class App extends Component {

    render() {

        const isLoggedIn = false;
        
        return (
            <React.Fragment>
                <Navbar>
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/installations">Installations</Link>
                    <Link className="nav-link" to="/2d">2D</Link>
                    <Link className="nav-link" to="/3d">3D</Link>
                </Navbar>


                <div className="content">
                    <Switch>
                    <Route path="/not-found" component={NotFound}/>
                    <Route path="/login" component={Login}/>

                    <ProptectedRoute
                        path="/:category/:work"
                        component={Pdp}
                        isLoggedIn={isLoggedIn}/>

                    <Route path="/:category"  render={props => <Page {...props} isLoggedIn={isLoggedIn}/>}/>
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


