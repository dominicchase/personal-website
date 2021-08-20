import React from 'react'

import { Link } from 'react-router-dom';

import { Button, Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import domImg from './img/dom.png'

import dadAndDomImg from './img/dad-and-dom.png'

import baileeAndDomImg from './img/bailee-and-dom.png'

class Home extends React.Component {

    render() {

        return (

            <> 

                <Carousel fade>

                    <Carousel.Item>

                        <img 

                            className = "d-block w-100"
                        
                            src =  {domImg}
                            
                        />

                    </Carousel.Item>

                    <Carousel.Item>

                        <img 

                            className = "d-block w-100"
                        
                            src = {baileeAndDomImg}
                        
                        />

                    </Carousel.Item>

                    <Carousel.Item>

                        <img 

                            className = "d-block w-100"
                        
                            src = {dadAndDomImg}
                        
                        />

                    </Carousel.Item>

                </Carousel>  

                <Button className = "btn-primary-button"> CLICK ME </Button>

            </>


            

            // <>

            //     {console.log("interval: " + seconds)}

            //     <Link to = "/about">

            //         <Button variant = "light"> About Dominic </Button>

            //     </Link>

            //     <Link to = "/contact">

            //         <Button> Contact Dominic </Button>

            //     </Link>

            // </>

        );
    }
}

export default Home;
