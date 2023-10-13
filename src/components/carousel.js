import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../img/1.webp";
import slider2 from "../img/2.webp";
import slider3 from "../img/3.webp";
import slider4 from "../img/4.webp";
import slider5 from "../img/5.webp";
import slider6 from "../img/6.webp";
import slider7 from "../img/7.webp";
import slider8 from "../img/8.webp";

function Slider() {
    return (
        <Carousel className="rounded">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider8}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider4}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider5}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider6}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider7}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider