import React from 'react';
import "./header.scss";
import {Link} from "react-router-dom";
import logoVB from "../../assets/LogoVB.png";

export default function Header() {
    return(

        <div className="header">
            <div className="menu">
                <div className="generalOptions">
                    <img className="logoVB" src={logoVB} alt="VirtualBriefcaseLogo"></img>
                    <Link to="/">Inicio</Link>
                    <Link to="/proyectos">Proyectos</Link>
                    <Link to="/user">Usuarios</Link>
                    <Link to="/sobrenosotros">Sobre Nosotros</Link>
                </div>
                <div className="loginOptions">
                    <Link to="/login">Iniciar Sesión</Link>
                    <Link to="/registrarse" className="button">Registrarse</Link>
               </div>
                <div className="userOptions">
                    <Link to="/miperfil">Mi perfil</Link>
                    <Link to="/close">Cerrar Sesión</Link>
                </div>
            </div>
        </div>
    )
}
