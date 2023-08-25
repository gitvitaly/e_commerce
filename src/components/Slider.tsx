import {Carousel} from "react-bootstrap";
import React from "react";
import img1 from "../img/image-1.jpg"
import img2 from "../img/image-2.jpg"
import img3 from "../img/three.jpg"
import img4 from "../img/four.jpg"
import img5 from "../img/five.jpg"

const Slider = () => {
    return (
        <Carousel className="shadow-sm">
            <Carousel.Item>
                <img src={img1} className="dblock w-100" alt="wslide"
                     style={{height: "20rem", objectFit: "cover"}}/>
                <Carousel.Caption>
                    <h3>Welcome shop</h3>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been
                        the industry's standard dummy text </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2} className="d-block w-100"
                     alt="w" style={{height: "20rem", objectFit: "cover"}}/>
                <Carousel.Caption>
                    <h3>Welcome shop</h3>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been
                        the industry's standard dummy text </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img3} className="d-block w-100" alt="w"
                     style={{height: "20rem", objectFit: "cover"}}/>
                <Carousel.Caption>
                    <h3>Welcome shop</h3>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img4} className="d-block w-100"
                     alt="w" style={{height: "20rem", objectFit: "cover"}}/>
                <Carousel.Caption>
                    <h3>Welcome shop</h3>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img5} className="d-block w-100" alt="w"
                     style={{height: "20rem", objectFit: "cover"}}/>
                <Carousel.Caption>
                    <h3>Welcome shop</h3>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
