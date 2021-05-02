import React, {Component} from "react";
import {withRouter} from "react-router-dom"
import queryString from "querystring"

import "./Car.scss"

class Car extends Component {
    constructor(props) {
        super(props);

        this.state = {
            make: this.props.auto.make,
            model: this.props.auto.model,
            year: this.props.auto.year,
            color: this.props.auto.color,
            owner: this.props.auto.owner,
            vin: this.props.auto.vin,
        }
    }


    onUpdateCar = () => {
        this.props.onUpdateCar(this.state);
    }

    render() {

        return (
            <div onClick={this.onUpdateCar} className={'car-container'}>
                <h2>{this.props.auto.make}</h2>
                <p>MODEL: {this.props.auto.model}</p>
                <p>YEAR: {this.props.auto.year}</p>
                {this.props.auto.color ? <p>COLOR: {this.props.auto.color}</p> : ""}
                {this.props.auto.owner ? <p>OWNER: {this.props.auto.owner}</p> : ""}
                <p>VIN: {this.props.auto.vin}</p>
            </div>

        )
    }

}

export default withRouter(Car);