import React from "react";
import '../styles/header.css'
import GitHub from '../assets/images/GitHub.png'
import KINO_TEKI_Logo from '../assets/images/KINO-TEKI-Logo.png'

export default function Header(){
    return(
        <header> 
            <div className = "logo">
                <img
                    src = {KINO_TEKI_Logo}
                />
                <p>KINO-TEKI</p>
            </div>
            <nav>
                <p>Sobre</p>
                <p>Home</p>
            </nav>
            <div className = "repository"> 
                <img
                    src = {GitHub}
                />
                <p><a href = "#">Repositório</a></p>
            </div>
        </header>
    )
}