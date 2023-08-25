import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
import ITEMS_DATA from "../data/itemsData";
import axios from "axios";


interface IButtonsCategory {
    allCategory: any
    filterCategory: any
    setItemsF: any
}


const ButtonsCategory = ({allCategory, filterCategory, setItemsF}: IButtonsCategory) => {
    const [filterData, setFilterData] = useState([])
    useEffect(() => {
        axios.get(ITEMS_DATA)
            .then(res => setFilterData(res.data))
            .catch(err => console.log(err))
    })
    return (
        <>

            {

                allCategory.map((val: any) => (
                    <Button className="border-0 bg-body-tertiary" size="sm"
                            variant="light"
                            onClick={() => filterCategory(val)}><MdOutlineKeyboardDoubleArrowRight/>

                        {val}
                    </Button>
                ))

            }
            <Button className="border-0 bg-body-tertiary" size="sm"
                    variant="light"
                    onClick={() => setItemsF(filterData)}> <MdOutlineKeyboardDoubleArrowRight/>all products


            </Button>
        </>
    );
};

export default ButtonsCategory;


