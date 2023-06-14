import React from 'react'
import { NavLink, useNavigate, withRouter } from "react-router-dom";
import  logo  from '../assets/imgs/travel.png'
export default function AppHeader(props) {

    return (
        <header className="app-header">
            {/* <section className="container"> */}
            {/* <h1 className="logo">Travelapp</h1> */}
            <img src= {logo} />
            <nav>
                <NavLink to="/forms" title='add a new travel'><i className="icon fa-solid fa-clipboard-list"></i></NavLink>
                <NavLink to="/table" title='your travels'><i className="icon fa-solid fa-map-location-dot"></i></NavLink>
            </nav>
            {/* </section> */}
        </header>
    )
}
