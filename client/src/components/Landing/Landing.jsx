import React from "react"
import { Link } from "react-router-dom"


export default function Landing(){
    

    return(
        <div>
            <h1>Landing Page</h1>
            <Link to='/home'><button >Entrar</button></Link>
        </div>
    )
}