import React from 'react';

function FooterContainer(props) {
    const footerStyles = {
        color: 'white',
        backgroundColor: 'black',
        display: 'flex',
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
