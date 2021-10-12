import React, { useState } from 'react'
import "./Home.scss"
import BasicLayout from '../../layout/BasicLayout'
import coverPage from "../../assets/png/coverPage.png"
import { Link } from 'react-router-dom'
import BasicModal from '../../components/Modals/BasicModal/BasicModal';
import SingUpForm from "../../components/SingUpForm/SingUpForm";

export default function Home(props) {

    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    }

    return (
        <BasicLayout>
            <div className="box">
                <div className="inf">
                    <h1>VIRTUAL<br/><span>BRIEFCASE</span></h1>
                    <h3>COMPARTE - APRENDE - INSPÍRATE</h3>
                    <p>
                    Virtual Briefcase es un espacio para que tú<br/>puedas dar a conocer tus proyectos.
                    </p>
                    <div className="optionsBox">
                        <Link to="" className="buttonClassic2" onClick={ () => openModal(<SingUpForm setShowModal={setShowModal}/>) }>Registrate<br/>gratis</Link>
                        <Link to="" className="buttonClassic">Ver<br/>proyectos</Link>
                    </div>
                </div>
                <img src={coverPage}></img>
            </div>
            <BasicModal show={showModal} setShow={setShowModal}>
                    {contentModal}
            </BasicModal>
        </BasicLayout>
    )
}
