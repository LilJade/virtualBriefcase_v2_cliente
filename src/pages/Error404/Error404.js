import React from 'react'
import "./Error404.scss"
import BasicLayout from '../../layout/BasicLayout/BasicLayout'
import ImgError404 from "../../assets/error404.png"
import { Link } from 'react-router-dom'

export default function Error404() {
    return (
        <BasicLayout>
            <div className="errorBox">
                <div className="errorInfo">
                    <h2>404 ERROR</h2>
                    <span>La página a la que intentas acceder no fué encontrada, esto puede ser porque la URL no existe, o no estas autorizado para acceder a ella.</span>
                    <Link to="/">Volver al Inicio</Link>
                </div>
                <div className="illustration">
                    <img src={ImgError404}></img>
                </div>
            </div>
        </BasicLayout>
    )
}
