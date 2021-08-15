import React from 'react';

import ImageSliderData from './ImageSliderData';

import Interval from './Interval';

class ImageSlider extends React.Component {

    constructor(props) {

        super(props);

        const seconds = Interval.seconds;
        
    }

    render() {

        return (

           <>

                {

                    ImageSliderData.map((item, index) => {

                            return (

                                <img src = {item.image} />
                                
                    )})

                }

           </>

        );
    }
}

export default ImageSlider;
