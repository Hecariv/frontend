import React, {Component} from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {withRouter} from "react-router-dom"

import "./AddCarForm.scss"

class AddCarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            make: "",
            model: "",
            year: "",
            color: "",
            owner: "",
            vin: "",
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    onSubmitCar = async (e) => {
        e.preventDefault();
        await fetch("https://vw-autos-api-v2.herokuapp.com/api/autos", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            }
        });
        this.props.history.goBack()
    }

    onCancel = e => {
        e.preventDefault();
       this.props.history.goBack()
    }

    render() {
        const {make, model, year, color, owner, vin} = this.state;
        return (
            <div className={"add-car-container"}>
                <div className={'add-car'}>
                    <h2 className={"title"}>Add new Car</h2>
                    <form className={'add-car-form'}>
                        <FormInput
                            type={"text"}
                            name={"make"}
                            value={make}
                            onChange={this.handleChange}
                            label={"Make"}
                            required
                        >

                        </FormInput>
                        <FormInput
                            type={"text"}
                            name={"model"}
                            value={model}
                            onChange={this.handleChange}
                            label={"Model"}
                            required
                        >

                        </FormInput>
                        <FormInput
                            type={"number"}
                            name={"year"}
                            value={year}
                            onChange={this.handleChange}
                            label={"Year"}
                            required
                        >

                        </FormInput>
                        <FormInput
                            type={"text"}
                            name={"color"}
                            value={color}
                            onChange={this.handleChange}
                            label={"Color"}
                        >

                        </FormInput>
                        <FormInput
                            type={"text"}
                            name={"owner"}
                            value={owner}
                            onChange={this.handleChange}
                            label={"Owner"}
                        >

                        </FormInput>
                        <FormInput
                            type={"text"}
                            name={"vin"}
                            value={vin}
                            onChange={this.handleChange}
                            label={"VIN"}
                            required
                        >

                        </FormInput>
                        <div className={'buttons'}>
                            <CustomButton onClick={this.onSubmitCar}>ADD</CustomButton>
                            <CustomButton onClick={this.onCancel}>Cancel</CustomButton>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default withRouter(AddCarForm);