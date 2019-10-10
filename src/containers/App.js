import React, {Component} from 'react';
import './App.css';
import AddCost from '../components/AddCost/AddCost';
import CostItem from '../components/CostItem/CostItem';
import TotalCost from '../components/TotalCost/TotalCost';

const uuid = require('uuid/v1');

class App extends Component {
    state = {
        costs: [],
        currentCost: {},
        total: 0
    };

    typeItem = (event) => {
        const currentCost = {...this.state.currentCost};
        currentCost.item = event.target.value;
        this.setState({currentCost});
    };
    typePrice = (event) => {
        const re = /^[0-9\b]+$/;

        if (event.target.value === '' || re.test(event.target.value)) {
            const currentCost = {...this.state.currentCost};
            currentCost.cost = event.target.value;
            this.setState({currentCost});
        }
    };
    addCost = (event) => {
        event.preventDefault();
        if (!this.state.currentCost.item || !this.state.currentCost.cost) return;
        const costs = [...this.state.costs];
        let currentCost = {item: this.state.currentCost.item, cost: this.state.currentCost.cost, id: uuid()};
        costs.push(currentCost);
        let total = this.state.total + parseFloat(currentCost.cost);
        currentCost = {item: '', cost: ''};
        this.setState({costs, currentCost, total});

        // console.log(currentCost);

    };
    removeCost = (id) => {
        const costs = [...this.state.costs];
        const index = costs.findIndex(item => id === item.id);
        const costRemoved = costs.splice(index, 1);
        let total = this.state.total - parseFloat(costRemoved.cost);
        console.log(total);
        this.setState({costs, total});
    };

    render() {
        console.log(this.state.costs);
        console.log(this.state.currentCost);
        return (
            <div className="App">
                <AddCost
                    changeItem={(e) => this.typeItem(e)}
                    changePrice={(e) => this.typePrice(e)}
                    click={(e) => this.addCost(e)}
                    item={this.state.currentCost.item}
                    cost={this.state.currentCost.cost}
                />

                {
                    (this.state.costs.length !== 0) ?
                        <div className="CostsList">
                            {
                                this.state.costs.map(cost => {
                                    return (
                                        <CostItem
                                            key={cost.id}
                                            item={cost.item}
                                            cost={cost.cost}
                                            remove={() => this.removeCost(cost.id)}
                                        />
                                    );
                                })
                            }
                        </div> : null
                }
                <TotalCost
                    total={this.state.total}
                />

            </div>

        );
    }
}

export default App;
