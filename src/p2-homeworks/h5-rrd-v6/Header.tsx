import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";


function Header() {
    return (
        <div className={"HeaderBox"}>
            <NavLink to={PATH.PRE_JUNIOR} className={"Link"}> PreJunior</NavLink>
            <NavLink to={PATH.Junior} className={"Link"}> Junior </NavLink>
            <NavLink to={PATH.JuniorPlus} className={"Link"}> Junior+ </NavLink>
            <span className={"Navigation"}> Navigation </span>
                {/*всплывающие окноно я подсмотрел*/}

        </div>
    )
}

export default Header
