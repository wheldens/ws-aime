import React, {Component} from 'react';
import { Navbar, Nav} from 'react-bootstrap';
class NavbarBoot extends Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Aime Yoshikawa</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {this.props.children.map(navItem =>
                           navItem
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarBoot;
