import React from "react";
import '../styles/header.css'
import GitHub from '../assets/images/GITHUB.png'
import KINO_TEKI_Logo from '../assets/images/KINO-TEKI-LOGO.png'

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
                        onClick = {() => {window.location.href = "https://github.com/Lucas-Mazzolim/KINO-TEKI/tree/master/src"}}
                        src = {GitHub}
                    />
                <p><a href = "https://github.com/Lucas-Mazzolim/KINO-TEKI/tree/master/src">Repositório</a></p>
            </div>
        </header>
    )
}