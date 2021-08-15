import React from 'react'

import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';



class Home extends React.Component {

    render() {

        return (

            <>

                <Link to = "/about">

                    <Button variant = "primary"> About Dominic </Button>

                </Link>

                <Link to = "/contact">

                    <Button> Contact Dominic </Button>

                </Link>

            </>

        );
    }
}

export default Home;
