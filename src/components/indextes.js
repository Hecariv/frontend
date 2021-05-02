import React, {Component} from "react";
import FormInput from "./form-input/FormInput";
import CustomButton from "./custom-button/CustomButton";

class Login2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            automobiles: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        fetch("https://vw-autos-api-v2.herokuapp.com/api/autos")
            .then(response => response.json())
            .then(data => this.setState(data))
    }


    render() {
        console.log(this.state.automobiles, " AUTOOOOOOS")
        return (
            <div>
                <div>
                    {this.state.automobiles.map(auto => <h1>{auto.color}</h1>)}
                </div>
            </div>
        )
    }
}

export default Login2;







