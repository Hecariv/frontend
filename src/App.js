import './App.css';
import LoginAndSignUp from "./login-and-sign-up/LoginAndSignUp";
import Nav from "./components/nav/Nav";
import {Route, Switch} from "react-router-dom"
import {auth, createUserProfileDocument} from "./firebase/Firebase";
import {Component} from "react";
import Cars from "./components/cars/Cars";
import AddCarForm from "./components/add-car-form/AddCarForm";
import UpdateCar from "./components/update-car/UpdateCar";


class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        }
    }
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            } else {
                this.setState({currentUser: userAuth})
            }
            console.log(this.state)
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Nav currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path={'/'} component={LoginAndSignUp} />
                    <Route exact path={'/cars'} component={Cars}/>
                    <Route exact path={'/cars/add'} component={AddCarForm} />
                    <Route path={'/cars/update'} component={UpdateCar} />
                </Switch>
            </div>
        );
    }

}

export default App;
