import React from 'react';
import './CostItem.css';

const CostItem = props => {
    return (
        <div>
            <span>{props.item}</span>
            <span>{props.cost}</span>
            <span>KZT</span>
            <button onClick={props.remove}>Delete</button>
        </div>
    );
};

export default CostItem;