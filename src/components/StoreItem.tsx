import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap";
import IItems from "../interface/itemsInterface";
import {formatCurrency} from "../utilities/formatCurrency";
import {RiArrowRightDoubleLine} from "react-icons/ri"
import {BsFillCartCheckFill} from "react-icons/bs"
import {useShoppingCart} from "./ShoppingCartContext";
import Rate from "./Rate";


interface Props {
    itemProps: IItems
   
}

const StoreItem: React.FC<Props> = ({itemProps}) => {
    const [description, setDescription] = useState(false)
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        deleteFromCart
    } = useShoppingCart()
    const quantity = getItemQuantity(itemProps.id)
    return (
        <Card>
            <div className="p-3 text-muted">Category: {itemProps.category}</div>
            <h6 className="ps-5 pt-4 pb-2 px-2 py-2 column-gap-lg-3">Price: <span
                className="fw-bold">{formatCurrency(itemProps.price)}</span></h6>
            <h5 className="text-center p-3 display: block text-truncate">{itemProps.title}</h5>

            <Card.Body className="d-flex flex-columm">
                <Card.Title>
                </Card.Title>
                <Card.Img
                    src={itemProps.image}
                    alt="clothes"
                    height="150px"
                    width="150px"
                    style={{objectFit: 'contain'}}
                />
            </Card.Body>
            <div className="position-relative">
                {description &&
                    <p className="text-xl-start p-3">{itemProps.description}</p>}
                {<Button variant="light" className="border-0 bg-body text-primary "
                         onClick={() => setDescription(prev => !prev)}>
                    <span>{description ? 'Hide description' : 'See description... '}</span>
                </Button>}
            </div>
            <div className="d-flex d-inline p-3 py-0 pb-0 mx-0">Rating:<span
                className="fw-bold px-1  ">{itemProps.rating.rate}</span>
                <span className="pb- px-0"><Rate key={itemProps.id} itemRate={itemProps}/></span>
            </div>
            <div className="p-3 pt-0"> Rating by count: <span className="fw-bold">{itemProps.rating.count}</span>
            </div>
            <div className="mt-auto p-3">
                {quantity === 0 ? (
                        <Button variant="outline-primary"
                                onClick={() => increaseCartQuantity(itemProps.id, quantity, itemProps.title, itemProps.image, itemProps.price)}>Move
                            to cart </Button>) :
                    <div className="d-flex align-items-center flex-columm" style={{gap: ".5rem"}}>
                        <div className="d-flex justify-content-center align-items-center flex-row"
                             style={{gap: ".5rem"}}>
                            <Button variant="outline-primary" className="border-0"
                                    onClick={() => decreaseCartQuantity(itemProps.id)}>-</Button>
                            <div className="fw-bold ">{quantity}<span
                                className="ps-1 fs-5"><RiArrowRightDoubleLine/><BsFillCartCheckFill/></span>
                            </div>
                            <Button variant="outline-primary" className="border-0"
                                    onClick={() => increaseCartQuantity(itemProps.id, quantity, itemProps.title, itemProps.image, itemProps.price)}>+</Button>
                        </div>
                        <Button variant="outline-danger" className="border-0"
                                onClick={() => deleteFromCart(itemProps.id)}>Delete</Button>
                    </div>
                }
            </div>
        </Card>
    );
};

export default StoreItem;
