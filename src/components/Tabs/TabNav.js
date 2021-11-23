/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {Row,Container} from "react-bootstrap"
import "./TabNav.scss"
import Biografia from '../User/Biografia'
import Redes from '../User/Redes'
import Habilidades from '../User/Habilidades'


export default function TabNav(props) {
    const {user,habilidades,loggedUser} = props

    const [typeb, setTypeb] = useState("biografia")

    const onChangeType = type => {
        if(type === "biografia"){
            setTypeb("biografia")
        }else if (type === "MisRedes"){
            setTypeb("MisRedes")
        }else{
            setTypeb("Habilidades")
        }
    }

    return (
        <div className="Usuario-data">
             <Container>
             <Row> 
        <div className="TabNavContainer">
            <ul className="tabsNav">
                <li className="tabItem">
                                <a className={typeb === "biografia" ? "selected": undefined} 
                                onClick={() => onChangeType("biografia")} >
                                    Biografía
                                </a>
                            </li>
                            <li className="tabItem">
                                 <a className={typeb === "MisRedes" ? "selected": undefined}  
                                onClick={() => onChangeType("MisRedes")} >
                                 Redes
                                </a>
                            </li>
                            <li className="tabItem">
                                <a className={typeb === "Habilidades" ? "selected": undefined} 
                                onClick={() => onChangeType("Habilidades")} >
                                   Habilidades
                                </a>
                            </li>
            </ul>

        </div>
        </Row>
        <Row>
                     <div className="info">
                         <div className="info-container">
                         {
                             typeb === "biografia" &&(
                                    <Biografia user={user}/>
                             )
                         }{

                                typeb === "MisRedes" &&(
                                    <Redes user={user}/>
                                )
                         }{
                                typeb === "Habilidades" &&(
                                <Habilidades  habilidades={habilidades} user={user} loggedUser={loggedUser} />
                                )
                         }
                         
                         </div>
                     </div>
                </Row> 
        </Container>
        </div>
    )
}
