import React from "react";
import '../styles/header.css'

export default function Header(){
    return(
        <header> 
            <div className = "logo">
                <img>

                </img>
                <p>KINO-TEKI</p>
            </div>
            <nav>
                <p>Sobre</p>
                <p>Home</p>
            </nav>
            <div className = "repository"> 
                <img></img>
                <p><a href = "#">Repositório</a></p>
            </div>
        </header>
    )
}