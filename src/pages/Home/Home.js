import React from 'react'
import "./Home.scss"
import BasicLayout from '../../layout/BasicLayout'
import coverPage from "../../assets/coverPage.png"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <BasicLayout>
            <div className="box">
                <div className="inf">
                    <h1>VIRTUAL<br/>BRIEFCASE</h1>
                    <h3>COMPARTE - APRENDE - INSPÍRATE</h3>
                    <p>
                    Virtual Briefcase es un espacio para que tú<br/>puedas dar a conocer tus proyectos.
                    </p>
                    <div className="optionsBox">
                        <Link to="" className="buttonClassic2">Registrate gratis</Link>
                        <Link to="" className="buttonClassic">Ver proyectos</Link>
                    </div>
                </div>
                <img src={coverPage}></img>
            </div>
        </BasicLayout>
    )
}
