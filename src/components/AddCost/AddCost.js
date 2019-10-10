import React from 'react';
import './AddCost.css';

const AddCost = props => {
    return (
        <form onSubmit={props.click} className="AddCost">
            <input
                className="ItemDescription"
                type="text"
                placeholder={"Item Name"}
                value={props.item}
                onChange = {props.changeItem}
            />
            <input
                className="ItemPrice"
                type="text"
                placeholder={"Cost"}
                value={props.cost}
                onChange = {props.changePrice}
            />
            <span>KZT</span>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddCost;