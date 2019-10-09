import React from 'react';
import './CostItem.css';

const CostItem = props => {
    return (
        <div>
            <span>{props.item}</span>
            <span>{props.cost}</span>
            <span>KZT</span>
            <button>Delete</button>
        </div>
    );
};

export default CostItem;