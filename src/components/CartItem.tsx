import React from 'react';
import {useShoppingCart} from "./ShoppingCartContext";
import {Button, Stack} from "react-bootstrap";
import ITEMS_DATA from "../data/itemsData";
import {formatCurrency} from "../utilities/formatCurrency";


interface ICartItem {
    id: number
    quantity: number
    image: string
    title: string
    price: number
}

const CartItem = ({id, image, quantity, title, price}: ICartItem) => {
    const {deleteFromCart, increaseCartQuantity} = useShoppingCart()
    const item = fetch(ITEMS_DATA)
        .then(res => res.json())
        .then(item => item.find((i: any) => i.id === id))
    if (item === null) return null
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center border-bottom">
            <img src={image} className="m-1" style={{width: "60px", height: "60px", objectFit: "cover"}} alt="p"/>
            <div className="w-auto">
                <div className="text-muted  " style={{fontSize: ".75rem"}}>{formatCurrency(price)}</div>
                <div className="  " style={{fontSize: ".80rem"}}> qty x <span
                    className="fw-semibold">{quantity}</span></div>
            </div>
            <div className="text-muted p-3 fw-bold px-4"
                 style={{fontSize: ".95rem"}}> {formatCurrency(price * quantity)}
            </div>
            <div>
                <Button variant="outline-success" size="sm"
                        onClick={() => increaseCartQuantity(id, quantity, title, image, price)}>add</Button></div>
            <div><Button variant="outline-danger" size="sm"
                         onClick={() => deleteFromCart(id)}>delete</Button>
            </div>
        </Stack>
    )
}

export default CartItem;
