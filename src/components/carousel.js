import React from "react";
import { Carousel } from "react-bootstrap";
import Jeff from "../img/Jeff.jpg";
import slider2 from "../img/2.png";
import slider3 from "../img/3.png";
import slider4 from "../img/4.png";
import slider5 from "../img/5.png";
import slider6 from "../img/6.png";
import slider7 from "../img/7.png";
import slider8 from "../img/8.png";

function Slider() {
    return (
        <Carousel className="rounded">
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
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider8}
                    alt="Third slide"
                />
            </Carousel.Item>

        </Carousel>
    )
}

export default Slider