import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa'
import IItems from "../interface/itemsInterface";

const color = {
    orange: "#FFBA5A",
    grey: "a9a9a9"
}

interface IRate {
    itemRate: IItems
}

const Rate: React.FC<IRate> = ({itemRate}) => {
    const stars = Array(5).fill(0)
    const [currentValue, setCurrentValue] = useState(itemRate.rating.rate)
    const [hoverValue, setHoverValue] = useState(undefined)

    const handleClick = (value: any) => {
        setCurrentValue(value)
    }
    const handleMouseOver = (value: any) => {
        setHoverValue(value)
    }
    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
    return (
        <div className="d-flex d-inline">
            {stars.map((_, index) => {
                return (
                    <div>
                        <FaStar
                            key={itemRate.rating.rate}
                            style={{cursor: "pointer"}}
                            color={(hoverValue || currentValue) >= index ? color.orange : color.grey}
                            onClick={() => handleClick(index)}
                            onMouseOver={() => handleMouseOver(index)}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default Rate;
