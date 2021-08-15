import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import './Styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationBar extends React.Component {

    render() {

        return (

                <Navbar bg = "navbarBackgroundColor">

                    <Navbar.Brand>

                        Logo

                    </Navbar.Brand>

                    <Nav navbarScroll>

                        <Nav.Link href = "/"> Home </Nav.Link>

                        <Nav.Link href = "/about"> About </Nav.Link>

                        <Nav.Link href = "/contact"> Contact </Nav.Link>
                        
                    </Nav>
                
                </Navbar>

        );
    }
}

export default NavigationBar;
