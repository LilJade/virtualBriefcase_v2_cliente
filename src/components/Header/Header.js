import React, { useState } from 'react';
import "./header.scss";
import {Link} from "react-router-dom";
import logoVB from "../../assets/LogoVB.png";
import SingUpForm from '../SingUpForm/SingUpForm';
import BasicModal from '../Modals/BasicModal/BasicModal';

export default function Header() {

    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    }

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
                    <a to="" className="button" onClick={ () => openModal(<SingUpForm setShowModal={setShowModal}/>) }>Registrarse</a>
               </div>
                <div className="userOptions">
                    <Link to="/miperfil">Mi perfil</Link>
                    <Link to="/close">Cerrar Sesión</Link>
                </div>
            </div>
            <BasicModal show={showModal} setShow={setShowModal}>
                    {contentModal}
            </BasicModal>
        </div>
    )
}
