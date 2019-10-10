import React from 'react';
import './CostItem.css';

const CostItem = props => {
    return (
        <div className="CostsListItem">
            <span>{props.item}</span>
            <span className="CostsListItemPrice">{props.cost}</span>
            <span>KZT</span>
            <button onClick={props.remove}>Delete</button>
        </div>
    );
};

export default CostItem;