import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import React from "react";
import IItems from "../interface/itemsInterface";
import {TbArrowsUpDown} from "react-icons/tb"

interface IParallax {
    itemProps: IItems
}

const ParallaxOne = ({itemProps}: IParallax) => {
    return (
        <Parallax className="my-3" pages={9}>
            <ParallaxLayer className="d-flex align-items-center justify-content-center" offset={0} speed={0} factor={0}
                           style={{
                               width: "20rem",
                               height: "10rem",
                               backgroundImage: `url(${itemProps.image})`,
                               backgroundSize: 'contain',
                           }}>
            </ParallaxLayer>
            <ParallaxLayer offset={1} factor={0} speed={0}>
                <h2 className="p-5 text-danger d-flex align-items-start justify-content-start "> 40
                    % OFF </h2>
            </ParallaxLayer>
            <ParallaxLayer className="d-flex align-items-center justify-content-center mx-4" offset={2} speed={0}
                           factor={0}
                           style={{
                               width: "30rem",
                               height: "20rem",
                               backgroundImage: `url(${itemProps.image})`,
                               backgroundSize: 'contain',
                           }}>
            </ParallaxLayer>
            <ParallaxLayer offset={3} factor={0} speed={0}>
                <h2 className="p-5 text-danger d-flex align-items-start justify-content-start "> 50
                    % OFF </h2>
            </ParallaxLayer>
            <ParallaxLayer className="d-flex align-items-center justify-content-center mx-4" offset={4} speed={0}
                           factor={0}
                           style={{
                               width: "30rem",
                               height: "20rem",
                               backgroundImage: `url(${itemProps.image})`,
                               backgroundSize: 'contain',
                           }}>
            </ParallaxLayer>
            <ParallaxLayer offset={5} factor={0} speed={0}>
                <h2 className="p-5 text-danger d-flex align-items-start justify-content-start "> 60
                    % OFF </h2>
            </ParallaxLayer>
            <ParallaxLayer className="d-flex align-items-center justify-content-center mx-4" offset={6} speed={0}
                           factor={0}
                           style={{
                               width: "30rem",
                               height: "20rem",
                               backgroundImage: `url(${itemProps.image})`,
                               backgroundSize: 'contain',
                           }}>
            </ParallaxLayer>
            <ParallaxLayer offset={7} factor={0} speed={0}>
                <h2 className="p-5 text-danger d-flex align-items-start justify-content-start "> 70
                    % OFF </h2>
            </ParallaxLayer>
            <ParallaxLayer className="d-flex align-items-center justify-content-center" offset={8} speed={0} factor={0}
                           style={{
                               width: "30rem",
                               height: "20rem",
                               backgroundImage: `url(${itemProps.image})`,
                               backgroundSize: 'contain',
                           }}>
            </ParallaxLayer>
            <ParallaxLayer offset={0.2} factor={0} speed={2}>
                <h4 className="p-5 text-danger d-flex align-items-start justify-content-start ">Scroll
                    the
                    Deals <span className="ps-3"><TbArrowsUpDown/></span></h4>
            </ParallaxLayer>
        </Parallax>
    )
}
export default ParallaxOne;
