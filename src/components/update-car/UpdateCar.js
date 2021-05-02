import React, {Component} from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {withRouter} from "react-router-dom"

import "./UpdateCar.scss"

class UpdateCar extends Component {

    state = {
        make: this.props.make,
        model: this.props.model,
        year: this.props.year,
        color: this.props.color,
        owner: this.props.owner,
        vin: this.props.vin,
    }

    handleChange = (e) => {
        e.preventDefault();
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    onSubmitCar = async (e) => {
        e.preventDefault();
        await fetch(`https://vw-autos-api-v2.herokuapp.com/api/autos/${this.state.vin}`, {
            method: "PATCH",
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            }
        });
        window.location.reload();
    }

    onDeleteCar = async (e) => {
        e.preventDefault();
        await fetch(`https://vw-autos-api-v2.herokuapp.com/api/autos/${this.state.vin}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            }
        });

        window.location.reload();
    }

    onCancel = e => {
        e.preventDefault();
        window.location.reload();
    }

    render() {
        return (
            <div className={"update-car-container"}>
                <div className={'update-car'}>
                    <h2 className={"title"}>Update Car</h2>
                    <form className={'update-car-form'}>
                        <FormInput
                            type={"text"}
                            name={"make"}
                            value={this.state.make}
                            onChange={this.handleChange}
                            label={"Make"}
                            required
                            readOnly
                        >

                        </FormInput>
                        <FormInput
                            type={"text"}
                            name={"model"}
                            value={this.state.model}
                            onChange={this.handleChange}
                            label={"Model"}
                            required
                            readOnly
                        >

                        </FormInput>
                        <FormInput
                            type={"number"}
                            name={"year"}
                            value={this.state.year}
                            onChange={this.handleChange}
                            label={"Year"}
                            required
                            readOnly
                        >

                        </FormInput>
                        <FormInput
                            type={"text"}
                            name={"color"}
                            value={this.state.color !== undefined ? this.state.color : ""}
                            onChange={this.handleChange}
                            label={"Color"}
                        >

                        </FormInput>
                        <FormInput
                            type={"text"}
                            name={"owner"}
                            value={this.state.owner !== undefined ? this.state.owner : ""}
                            onChange={this.handleChange}
                            label={"Owner"}
                        >

                        </FormInput>
                        <FormInput
                            type={"text"}
                            name={"vin"}
                            value={this.state.vin}
                            onChange={this.handleChange}
                            label={"VIN"}
                            required
                            readOnly
                        >

                        </FormInput>
                        <div className={'buttons'}>
                            <CustomButton onClick={this.onSubmitCar}>UPDATE</CustomButton>
                            <CustomButton onClick={this.onCancel}>Cancel</CustomButton>
                        </div>
                        <div className={"delete-button-container"}>

                            <CustomButton
                                style={
                                    {
                                        backgroundColor: "orangered",
                                        alignItems: "center"
                                    }
                                }
                                onClick={this.onDeleteCar}>DELETE</CustomButton>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default withRouter(UpdateCar);