import React from 'react';
import './AddCost.css';

const AddCost = props => {
    return (
        <form onSubmit={props.click} className="AddCost">
            <input
                type="text"
                placeholder={"Item Name"}
                itemName={props.item}
            />
            <input
                type="text"
                placeholder={"Cost"}
                value={props.cost}
                onChange = {props.change}
            />
            <span>KZT</span>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddCost;