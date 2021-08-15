import React from 'react'

import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import { seconds } from './Interval';

import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {

    render() {

        return (

            <>

                {console.log("interval: " + seconds)}

                <Link to = "/about">

                    <Button variant = "light"> About Dominic </Button>

                </Link>

                <Link to = "/contact">

                    <Button> Contact Dominic </Button>

                </Link>

            </>

        );
    }
}

export default Home;
