import React, {useEffect, useState} from 'react';
import ParallaxOne from "../components/Parallax";
import axios from "axios";
import IItems from "../interface/itemsInterface";
import ITEMS_DATA from "../data/itemsData";
import {Container, Row, Col, Button} from "react-bootstrap";
import El_CAT_DATA from "../data/electronicCategoryData";
import {BsFire} from "react-icons/bs"
import DESC_ITEMS_DATA from "../data/descItemsData";
import {useNavigate} from "react-router-dom";


const About = () => {
    const navigate = useNavigate()
    const navigateStore = () => (
        navigate('/store')
    )
    const [items, setItems] = useState([])
    const [itemsTwo, setItemsTwo] = useState([])
    const [itemsThree, setItemsThree] = useState([])

    useEffect(() => {
        async function getDataItems() {
            const response = await axios.get(DESC_ITEMS_DATA)
            const responseTwo = await axios.get(ITEMS_DATA)
            const responseThree = await axios.get(El_CAT_DATA)
            setItems(response.data);
            setItemsTwo((responseTwo.data))
            setItemsThree((responseThree.data))
        }

        getDataItems()
    }, []);
    return (
        <>
            <h3 className="mt-1 text-muted ">
                Hot Deal Seller
            </h3>
            <Container className="mt-2">
                <Row className="mb-3">
                    <Col className="d-flex align-items-center justify-content-center">
                        <Button onClick={navigateStore} variant="light"
                                className="border-0 bg-body-tertiary border-bottom   rounded-end  rounded-start text-center">
                            Follow section <span className="fw-bold ">'Store' </span>and enjoy the Items...<span
                            className="px-2 "><BsFire/><BsFire/><BsFire/></span>

                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="mx-4"> {items.map((item: IItems) => (
                        <ParallaxOne key={item.id} itemProps={item}/>))}
                    </Col>

                    <Col className="mx-5">
                        {itemsThree.map((item: IItems) => (
                            <ParallaxOne key={item.id} itemProps={item}/>))}
                    </Col>
                    <Col className="mx-1">
                        {itemsTwo.map((item: IItems) => (
                            <ParallaxOne key={item.id} itemProps={item}/>))}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;
