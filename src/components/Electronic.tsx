import React from 'react';
import IItems from "../interface/itemsInterface";
import {Button, Image,} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

interface IElectronic {
    itemProps: IItems
}

const Electronic = ({itemProps}: IElectronic) => {
    const navigate = useNavigate()
    const navigateStore = () => (
        navigate('/store')
    )
    return (
        <>
            <Image
                src={itemProps.image}
                alt="clothes"
                height="50px"
                width="130px"
                style={{objectFit: 'contain'}}/>
            <Button onClick={navigateStore} size="sm" variant="outline-primary"
                    className="border-0 border-end border-bottom shadow fw-bold m-4 ">Select {itemProps.category}</Button>
        </>
    );
};

export default Electronic;
