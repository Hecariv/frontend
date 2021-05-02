import React from "react";
import {Link} from "react-router-dom";

import {auth} from "../../firebase/Firebase";

//import { ReactComponent as Logo } from "../../assets/crown.svg"

import "./Nav.scss"

const Nav = ({currentUser}) => (
    <div className={"header"}>
        <Link className={"logo-container"} to={"/"}>
            {/*<Logo className={"logo"} />*/}
        </Link>
        <div className={"options"}>
            {
                currentUser ?
                    <Link className={"option"} to={"/cars"}>
                        CARS
                    </Link>
                    : null
            }

            {
                currentUser ?
                    <Link className={"option"} onClick={() => auth.signOut()} to={"/"}>SIGN OUT</Link>
                    :
                    <Link className={"option"} to={"/"}>SIGN IN</Link>
            }
        </div>
    </div>
)

export default Nav;