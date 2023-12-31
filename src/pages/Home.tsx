import React, {useEffect, useState} from 'react';
import Slider from "../components/Slider";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import IItems from "../interface/itemsInterface";
import Electronic from "../components/Electronic";
import El_CAT_DATA from "../data/electronicCategoryData";
import img1 from "../img/image-1.jpg";
import img3 from "../img/three.jpg";
import img4 from "../img/four.jpg";


const Home = () => {
    const navigate = useNavigate()
    const navigateStore = () => (
        navigate('/store')
    )
    const [items, setItems] = useState([])
    useEffect(() => {
        async function getDataItems() {
            const response = await axios.get(El_CAT_DATA)
            setItems(response.data);
        }
        getDataItems()
    }, []);
    return (
        <>
            <Slider/>
            <Container className="mb-5 mt-3" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
                <Row md={2} xs={1} lg={4} className=" g-3 d-flex justify-content-center">
                    <Col className="pt-3 pb-0 px-1">
                        <Card style={{width: "18rem"}}>
                            <Card.Img variant="top" src={img4}/>
                            <Card.Body></Card.Body>
                            <Card.Title className="mx-4">Men's</Card.Title>
                            <Card.Text className="mx-3 mb-2">Contrary to popular belief, Lorem Ipsum is not simply
                                random
                                text</Card.Text>
                            <Button className="  m-2 w-50 " size="sm"
                                    variant="outline-primary" onClick={navigateStore}>Men's</Button>
                        </Card>
                    </Col>
                    <Col className="pt-3 pb-0 px-3">
                        <Card style={{width: "18rem"}}>
                            <Card.Img variant="top" src={img3}/>
                            <Card.Body></Card.Body>
                            <Card.Title className="mx-4">Women's</Card.Title>
                            <Card.Text className="mx-3 mb-2">Contrary to popular belief, Lorem Ipsum is not simply
                                random
                                text</Card.Text>
                            <Button className="  m-2 w-50 " size="sm"
                                    variant="outline-primary" onClick={navigateStore}>Women's</Button>
                        </Card>
                    </Col>
                    <Col className="pt-3 pb-0 px-4">
                        <Card style={{width: "18rem"}}>
                            <Card.Img variant="top" src={img1}/>
                            <Card.Body></Card.Body>
                            <Card.Title className="mx-4">Jewelery</Card.Title>
                            <Card.Text className="mx-3 mb-2">Contrary to popular belief, Lorem Ipsum is not simply
                                random
                                text</Card.Text>
                            <Button className="  m-2 w-50 " size="sm"
                                    variant="outline-primary" onClick={navigateStore}>Jewelery</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container style={{marginBottom: ""}}
                       className="d-flex flex-column align-items-center bg-body rounded shadow-sm">
                <Row>
                    <Col md={6} className="p-2">
                        {items.map((item: IItems) => (
                            <Electronic key={item.id} itemProps={item}/>))}
                    </Col>
                    <Col md={5} className="p-4">
                        <h2> Electronics</h2>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content
                            of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English. Many desktop publishing packages and web
                            page
                            editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                            will
                            uncover many web sites still in their infancy.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Home;

