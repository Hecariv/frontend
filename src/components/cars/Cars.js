import React, {Component} from "react";
import CarList from "../car-list/CarList";
import SearchBox from "../search-box/SearchBox";
import {withRouter} from "react-router-dom"

import "./Cars.scss"
import CustomButton from "../custom-button/CustomButton";
import UpdateCar from "../update-car/UpdateCar";

class Cars extends Component {
    constructor(props) {
        super(props);

        this.state = {
            automobiles: [],
            searchField: '',
            update: false,
            autoUpdate: {}
        }
    }

    async componentDidMount() {
        const response = await fetch("https://vw-autos-api-v2.herokuapp.com/api/autos");
        const json = await response.json();
        this.setState(json);
    }

    onSearchChange = event => {
        this.setState({searchField: event.target.value})
    }

    onClickHandler = (e) => {
        e.preventDefault();
        this.props.history.push(this.props.match.url + "/add")
    }

    onUpdateCar = (auto) => {
        const autoToUpdate = this.state.automobiles.filter(autoList => autoList.vin === auto.vin)
        console.log(autoToUpdate[0])
        this.setState({autoUpdate: autoToUpdate[0], update: true})
    }


    render() {
        const {automobiles, searchField} = this.state;
        const filteredCars = automobiles.filter(car => car.make.toLowerCase().startsWith(searchField.toLowerCase()));
        return (
            <div>
                {this.state.update ?
                    <UpdateCar
                        make={this.state.autoUpdate.make}
                        model={this.state.autoUpdate.model}
                        year={this.state.autoUpdate.year}
                        color={this.state.autoUpdate.color}
                        owner={this.state.autoUpdate.owner}
                        vin={this.state.autoUpdate.vin}
                    />
                    :
                    <div className={'cars'}>
                        <h1>CARS</h1>
                        <SearchBox onSearchChange={this.onSearchChange}/>
                        <CarList automobiles={filteredCars} onUpdateCar={this.onUpdateCar}/>
                        <CustomButton onClick={this.onClickHandler}>Add Car</CustomButton>
                    </div>
                }
            </div>
        )
    }

}

export default withRouter(Cars);