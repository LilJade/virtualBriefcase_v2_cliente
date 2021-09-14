import React from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'
import BasicLayout from '../../layout/BasicLayout/BasicLayout'
import loginImage from '../../assets/authentication.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { FormGroup } from 'react-bootstrap'

export default function Login() {
    return (
        <BasicLayout>
            <div className="container">
                <div className="rotules">
                    <h2>VIRTUAL<br/><span>BRIEFCASE</span></h2>
                    <Link to="/">Volver al Inicio</Link>
                </div>
                <div className="loginBox">
                    <div className="inf">
                        <img src={loginImage}></img>
                        <div>
                            <span><FontAwesomeIcon icon={faBriefcase}/>La mejor forma de crear un portafolio</span>
                            <span><FontAwesomeIcon icon={faTachometerAlt}/>Rápido y sencillo</span>
                            <span><FontAwesomeIcon icon={faLocationArrow}/> Desde cualquier lugar</span>
                        </div>
                    </div>
                    <form>
                        <h4>¡BIENVENIDO!</h4>
                        <div></div>
                    </form>
                </div>
            </div>
        </BasicLayout>
    )
}
