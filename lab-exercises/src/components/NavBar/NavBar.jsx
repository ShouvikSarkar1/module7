import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "../../Context/MyThemeContext";

export default function NavBar() {
    const {theme} = useContext(MyThemeContext);

    return (
        <nav className='NavBar' style={{backgroundColor: theme.background, color: theme.foreground}}>
            <ul className='menu'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/login'>Log In</NavLink></li>
                <li><NavLink to='/bitcoinpage'>Bitcoin Rates</NavLink></li>
            </ul>
        </nav>
    )
}