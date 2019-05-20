import React from 'react';
import ModalBoot from "./bootstrap/modal-bootstrap";
import {Modal} from "react-bootstrap";


function FooterContainer(props) {
    const footerStyles = {
        color: 'white',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px'
    };


    return (
        <footer className="mt-4 footer" style={footerStyles}>
                <h3>Aime Yoshikawa</h3>
        </footer>
    );
}

export default FooterContainer;
