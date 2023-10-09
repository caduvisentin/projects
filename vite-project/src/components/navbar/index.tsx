import { NavLink } from "react-router-dom";
import "./navbar.css"

function Navbar() {
    return(
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/coffees"}>Cafés</NavLink>
        </nav>
    );
}

export default Navbar;