import React from "react";
import { Carousel } from "react-bootstrap";
import Jeff from "../img/Jeff.jpg";

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Jeff}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Jeff}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Jeff}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    )
}

export default Slider