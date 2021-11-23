/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import "./header.scss";
import {Link} from "react-router-dom";
import logoVB from "../../assets/png/LogoVB.png";
import SingUpForm from '../SingUpForm/SingUpForm';
import BasicModal from '../Modals/BasicModal/BasicModal';
import useAuth from '../../hooks/useAuth';
import {logoutApi} from "../../api/auth"
export default function Header(props) {
    
    const {setRefreshCheckLogin} = props;
    const user = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    }
    const logout = () => {
        logoutApi();
        setRefreshCheckLogin(true)
    }


    return(

        <div className="header">
            <div className="menu">
                <div className="generalOptions">
                    <img className="logoVB" src={logoVB} alt="VirtualBriefcaseLogo"></img>
                    <Link to="/">Inicio</Link>
                    <Link to="/proyectos">Proyectos</Link>
                    <Link to="/users">Usuarios</Link>
                    <Link to="/aboutus">Sobre Nosotros</Link>
                </div>
                {user ?(
                     <div className="userOptions">
                     <Link to={`/${user?._id}`}>Mi perfil</Link>
                     <Link to="" onClick={logout}>Cerrar Sesión</Link>
                 </div>
                    ):(
                        <div className="loginOptions">
                        <Link to="/login">Iniciar Sesión</Link>
                        <a to="" className="button" onClick={ () => openModal(<SingUpForm setShowModal={setShowModal}/>) }>Registrarse</a>
                   </div>)
                }
                
            </div>
            <BasicModal show={showModal} setShow={setShowModal}>
                    {contentModal}
            </BasicModal>
        </div>
    )
}
