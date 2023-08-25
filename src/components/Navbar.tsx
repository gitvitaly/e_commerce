import React, {useState} from 'react';
import {
    Button,
    Container,
    Form,
    FormControl,
    Modal,
    Nav,
    Navbar as NavbarBs,
    NavbarBrand
} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useShoppingCart} from "./ShoppingCartContext";
import {GiTechnoHeart} from 'react-icons/gi'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

const Navbar = () => {
    const {openCart, cartQuantity} = useShoppingCart()
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <NavbarBs sticky="top" collapseOnSelect expand="lg" className="bg-white shadow-sm mb-3">
                <Container>
                    <NavbarBrand href="http://localhost:3000/store"
                                 className="navbar-brand"><GiTechnoHeart/></NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav"/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbar-collapse">
                            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                            <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                        </Nav>
                        <div>
                            <Button variant="outline-secondary" className="border-0 border-bottom" size="sm"
                                    onClick={handleShow}>Log
                                In</Button>
                            <Button variant="outline-secondary"
                                    className="m-2 border-0 border-bottom" size="sm" onClick={handleShow}>Sign
                                Out</Button>
                        </div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Log In</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form className="m-2">
                                    <Form.Group className="mb-4" controlId="fromBasicEmail">
                                        <Form.Label>Email Address</Form.Label>
                                        <FormControl type="email" placeholder="Enter email" className="mb-2"/>
                                        <Form.Text className="text-muted"></Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="fromBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <FormControl type="email" placeholder="Enter password" className="mb-2"/>
                                    </Form.Group>
                                    <Form.Group className="m-3" controlId="fromBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me"/>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                        </Modal>
                        <div>
                            {cartQuantity > 0 && (<button onClick={openCart} type="button"
                                                          style={{
                                                              width: "3rem",
                                                              height: "3rem",
                                                              position: "relative"
                                                          }}
                                                          className="rounded btn btn-outline-primary border-0">
                                <svg
                                    viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentcolor">
                                    <path
                                        d="M463.1 416c-26.51 0-47.1 21.49-47.1 48s21.49 48 47.1 48s47.1-21.49 47.1-48S490.5 416 463.1 416zM175.1 416c-26.51 0-47.1 21.49-47.1 48S149.5 512 175.1 512s47.1-21.49 47.1-48S202.5 416 175.1 416zM569.5 44.73c-6.109-8.094-15.42-12.73-25.56-12.73H121.1L119.6 19.51C117.4 8.19 107.5 0 96 0H23.1C10.75 0 0 10.75 0 23.1S10.75 48 23.1 48h52.14l60.28 316.5C138.6 375.8 148.5 384 160 384H488c13.25 0 24-10.75 24-23.1C512 346.7 501.3 336 488 336H179.9L170.7 288h318.4c14.29 0 26.84-9.47 30.77-23.21l54.86-191.1C577.5 63.05 575.6 52.83 569.5 44.73z"/>
                                </svg>
                                <div className="rounded bg-danger d-flex justify-content-center align-items-center"
                                     style={{
                                         color: "white",
                                         width: "1.5rem",
                                         height: "1.5rem",
                                         position: "absolute",
                                         bottom: 0,
                                         right: 0,
                                         transform: "translate(15%,35%)"
                                     }}>{cartQuantity}
                                </div>
                            </button>)}
                        </div>
                    </NavbarCollapse>
                </Container>
            </NavbarBs>

        </>
    );
};

export default Navbar;
