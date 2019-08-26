import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
    <header>
        <h1>Driver Track App</h1>
        <NavLink to="/" activeClassName="selected" exact>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="selected">Create Driver</NavLink>
        <NavLink to="/help" activeClassName="selected">Help</NavLink>
    </header>
    
);

export default Header;