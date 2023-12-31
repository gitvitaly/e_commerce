import React, {useState} from 'react';
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import {useEffect} from "react";
import IItems from '../interface/itemsInterface';
import ITEMS_DATA from "../data/itemsData";
import axios, {AxiosError} from "axios";
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'

const Store = () => {
    const [items, setItems] = useState<IItems[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [filter, setFilter] = useState(items)

    async function getDataItems() {
        try {
            setLoading(true)
            const response = await axios.get(ITEMS_DATA)
            setItems(response.data);
            setLoading(false)
            setFilter((response.data))

        } catch (e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        getDataItems()
    }, []);

    const Search = (event: any) => {
        setFilter(items.filter(f => f.title.toLowerCase().includes(event.target.value)))
    }
    const filterProduct = (cat: string) => {
        const updateList = items.filter((item) => item.category === cat)
        setFilter(updateList)
    }

    return (
        <Container>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-danger">{error}</p>}
            <Row>
                <Form action="" className="d-flex pb-3 px-3 md={2} xs={1} lg={4}">
                    <h2 className="d-flex d-inline mt-1 text-muted">Store Items</h2>
                    <h2 className="mt-1 mx-4 ">
                        <Button onClick={() => getDataItems()} className="border-0 bg-body-tertiary" size="sm"
                                variant="light">All products <MdOutlineKeyboardDoubleArrowRight/></Button>
                        <Button onClick={() => filterProduct("men's clothing")} className="border-0 bg-body-tertiary"
                                size="sm"
                                variant="light">Men's
                            clothing <MdOutlineKeyboardDoubleArrowRight/></Button>
                        <Button onClick={() => filterProduct("women's clothing")} className="border-0 bg-body-tertiary"
                                size="sm" variant="light">Women's
                            clothing <MdOutlineKeyboardDoubleArrowRight/></Button>
                        <Button onClick={() => filterProduct("jewelery")} className="border-0 bg-body-tertiary"
                                size="sm"
                                variant="light">Jewelery <MdOutlineKeyboardDoubleArrowRight/></Button>
                        <Button onClick={() => filterProduct("electronics")} className="border-0 bg-body-tertiary"
                                size="sm"
                                variant="light">Electronics <MdOutlineKeyboardDoubleArrowRight/></Button>
                    </h2>
                    <InputGroup className="m-2  w-25 px-3 ">
                        <FormControl onChange={Search} placeholder="search"
                                     type="search" className="md={2} xs={1} lg={4} "/>
                    </InputGroup>
                </Form>
            </Row>
            <Row md={2} xs={1} lg={4} className="g-3">
                {
                    filter.map((item: IItems) => (
                        <Col key={item.id}><StoreItem itemProps={item}/></Col>))
                }
            </Row>
        </Container>
    );
};

export default Store;
