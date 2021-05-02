import React, {Component} from "react";
import {withRouter} from "react-router-dom"

import Car from "../car/Car";

import "./CarList.scss"

class CarList extends Component {

    state = {
        update: false,
    }

    onUpdateCar = (auto) => {
        this.props.onUpdateCar(auto);
    }

    render() {
        return (
            <div>
                <div className={"car-list"}>
                    {this.props.automobiles.map(auto => (
                        <Car
                            key={auto.vin}
                            auto={auto}
                            onUpdateCar={this.onUpdateCar}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default withRouter(CarList);