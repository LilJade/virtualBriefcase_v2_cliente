/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import "./Login.scss"
import BasicLayout from '../../layout/BasicLayout/BasicLayout'
import loginImage from '../../assets/png/authentication.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import BasicModal from "../../components/Modals/BasicModal/BasicModal";
import SingInForm from "../../components/SingInForm/SingInForm";
import SingUpForm from "../../components/SingUpForm/SingUpForm";
import { Link } from 'react-router-dom'

function LeftComponent() {
    return(
        <div className="left">
            <img src={loginImage} alt="Login"></img>
            <div className="rotules">
                <span><FontAwesomeIcon icon={faBriefcase}/> La mejor forma de crear un portafolio</span>
                <span><FontAwesomeIcon icon={faTachometerAlt}/> Rápido y sencillo</span>
                <span><FontAwesomeIcon icon={faLocationArrow}/> Desde cualquier lugar</span>
            </div>
        </div>
    )
}

function RightComponent(props) {

    const {openModal, setShowModal,setRefreshCheckLogin} = props;

    return(
        <div className="right">
            <div className="formBox">
                <h3>¡BIENVENIDO!</h3>
                <SingInForm setRefreshCheckLogin={setRefreshCheckLogin}/>
                <h4>¿Aún no estás registrado?</h4>
                <a onClick={ () => openModal(<SingUpForm setShowModal={setShowModal}/>) }>¡Regístrate ahora!</a>
            </div>
        </div>
    )
}

export default function Login(props) {

    const {setRefreshCheckLogin} = props;
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    }

    return (
        <>
         
                <div className="login">
                    <div className="tittle">
                        <h2>Virtual<br /><span>BRIEFCASE</span></h2>
                        <Link to="/">Volver al inicio</Link>
                    </div>
                    <div className="boxContainer">
                        <LeftComponent />
                        <RightComponent openModal={openModal} setShowModal={setShowModal} setRefreshCheckLogin={setRefreshCheckLogin}/>
                    </div>
                </div>
                <BasicModal show={showModal} setShow={setShowModal}>
                    {contentModal}
                </BasicModal>
        </>
    )
}
