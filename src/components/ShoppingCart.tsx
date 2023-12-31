import React, {useEffect, useState} from 'react';
import {Button, Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "./ShoppingCartContext";
import CartItem from "./CartItem";
import {BsFillCartCheckFill} from "react-icons/bs";
import {formatCurrency} from "../utilities/formatCurrency";
import ITEMS_DATA from "../data/itemsData";
import IItems from "../interface/itemsInterface";

interface IShoppingCart {
    isOpen: boolean
}

const ShoppingCart = ({isOpen}: IShoppingCart) => {
    const {closeCart, cartItems} = useShoppingCart()
    const [totalData, setTotalData] = useState<IItems[]>([])

    useEffect(() => {
        fetch(ITEMS_DATA)
            .then(res => res.json())
            .then((data) => setTotalData(data))
    })
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton={true}>
                <Offcanvas.Title>
                    Cart Items<BsFillCartCheckFill className="m-2 "/>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (<CartItem key={item.id} {...item}/>))}
                    <div className="fs-5 ms-auto fw-bold m-3 "><span className="m-2">Total</span>

                        {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = totalData.find((i: any) => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0))}
                    </div>
                    <div><Button className="w-100 " size="sm" type="submit"
                                 variant="secondary">checkout</Button></div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ShoppingCart;
