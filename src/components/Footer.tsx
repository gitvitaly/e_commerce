import React from 'react';
import {Button, Col, Container} from "react-bootstrap";
import {FaFacebookSquare, FaTwitter, FaInstagramSquare, FaTelegramPlane} from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <Container className="bg-white shadow mt-5 " fluid style={{
                boxShadow: "inherit",
                backgroundColor: 'white',
                color: '#fff',
                bottom: 0,
            }}>
                <Container style={{display: 'flex', justifyContent: 'unset', padding: '10px',}}>
                    <Col><p className="p-2 fw-semibold text-muted text-start">{' '}version 6.05.1</p>
                    </Col>
                    <Col><p className="p-2 text-black text-center text-muted">Copyright:{' '}Website Store Item</p>
                    </Col>
                    <Col className="d-flex justify-content-end mb-2">
                        <Button variant="outline-secondary"
                                className="border-0 bg-body text-muted text-end  fs-5 px-2 ">
                            <FaInstagramSquare/></Button>
                        <Button variant="outline-secondary"
                                className="border-0 bg-body text-muted text-end  fs-5 px-2 ">
                            <FaFacebookSquare/></Button>
                        <Button variant="outline-secondary"
                                className="border-0 bg-body text-muted text-end  fs-5 px-2 ">
                            <FaTwitter/></Button>
                        <Button variant="outline-secondary"
                                className="border-0 bg-body text-muted text-end  fs-5 px-2 ">
                            <FaTelegramPlane/></Button>
                    </Col>
                </Container>
            </Container>
        </>
    )
};

export default Footer;
