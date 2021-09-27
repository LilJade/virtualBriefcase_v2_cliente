import React, { useState } from 'react'
import "./Login.scss"
import BasicLayout from '../../layout/BasicLayout/BasicLayout'
import loginImage from '../../assets/authentication.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'
import BasicModal from "../../components/Modals/BasicModal/BasicModal";
import SingInForm from "../../components/SingInForm/SingInForm";
import SingUpForm from "../../components/SingUpForm/SingUpForm";

function LeftComponent() {
    return(
        <Col className="login__left" xs={6}>
            <img src={loginImage} alt="Login"></img>
            <div>
                <span><FontAwesomeIcon icon={faBriefcase}/>La mejor forma de crear un portafolio</span>
                <span><FontAwesomeIcon icon={faTachometerAlt}/>Rápido y sencillo</span>
                <span><FontAwesomeIcon icon={faLocationArrow}/> Desde cualquier lugar</span>
            </div>
        </Col>
    )
}

function RightComponent(props) {

    const {openModal, setShowModal,setRefreshCheckLogin} = props;

    return(
        <Col className="login__right" xs={6}>
            <div>
                <h3>¡BIENVENIDO!</h3>
                <SingInForm setRefreshCheckLogin={setRefreshCheckLogin}/>
                <h4>¿Aún no estás registrado?</h4>
                <a onClick={ () => openModal(<SingUpForm setShowModal={setShowModal}/>) }>¡Regístrate ahora!</a>
            </div>
        </Col>
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
            <BasicLayout>
                <Container className="login" fluid>
                    <div className="tittle">
                        <h2>Virtual<br />BRIEFCASE</h2>
                    </div>
                    <Row>
                        <LeftComponent />
                        <RightComponent openModal={openModal} setShowModal={setShowModal} setRefreshCheckLogin={setRefreshCheckLogin}/>
                    </Row>
                </Container>
                <BasicModal show={showModal} setShow={setShowModal}>
                    {contentModal}
                </BasicModal>
            </BasicLayout>
        </>
    )
}
