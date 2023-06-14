
import {NavLink} from 'react-router-dom';

function Navbar () {
    //function for style on active state:
    let activeStyle = {
        color: "#E6478C",
    };

    return (
        <nav className="navBar">
            <ul className="nav">
                <li className="navLink"><NavLink to='/' style={({ isActive}) => isActive ? activeStyle : undefined}>Home</NavLink></li>
                <li className="navLink "><NavLink to='/page/currencyconverter' style={({ isActive }) =>isActive ? activeStyle : undefined}>Currency Converter</NavLink></li>
                <li className="navLink "><NavLink to='/page/about' style={({ isActive }) =>isActive ? activeStyle : undefined}>About</NavLink></li>
            </ul>
        </nav>
    );
} 
export default Navbar;