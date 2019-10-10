import React from 'react';
import './TotalCost.css';

const TotalCost = props => {
    return (
        <div>
            <h3>Total spent:</h3>
            <span>{props.total}</span>
            <span> KZT</span>
        </div>
    );
};

export default TotalCost;