import React, { useState } from 'react'
import "./ListProyecto.scss"
import {Image, Card,Row, } from "react-bootstrap";
import {Link} from "react-router-dom"
import {map} from "lodash";
import moment from "moment";
import {API_HOST} from "../../utils/constant";
import portadaNoFound from "../../assets/png/sin_foto.png"
import Agregar from "../../assets/png/boton-agregar.png"
import ProyectoModal from "../Modals/ProyectoModal"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
export default function ListProyecto(props) {

    const {proyectos, user, loggedUsers} = props;
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="proyects"> 
            <div className ="proyect-header">
            <h2>Proyectos</h2> 
            </div>
            <div className="proyects-list">
              <Row  md={4}>
            {map(proyectos, (proyecto, index) =>(
                
              <Proyecto key={index} proyecto={proyecto} />
              
            ))}
            
            {user && (
            <div className="proyectAgegar">
            <Card className="Agregar-card" onClick={() => setShowModal(true)}>
            <Image variant="top" src={Agregar} className="foto"/>
            <h2>Agregar un nuevo proyecto</h2>
            <h3>Dejanos saber que cosas nuevas has creado</h3>
            </Card> 
            </div>
             )}
              <ProyectoModal show={showModal} setShow={setShowModal} />
            </Row>
            </div>
        </div>
    )
}
function Proyecto(props){
    const { proyecto}  = props
    return(  
        <div className="proyectitems">
            <Card as ={Link} to={`/Proyectos/${proyecto?._id}`} className="proyectl">
            <Image 
            src={
                proyecto?.portada 
                ? `${API_HOST}/getPortada?id=${proyecto._id}`: portadaNoFound
            }
            alt ={proyecto.titulo}
            className="portadas" />
            <h2>{proyecto.titulo}</h2>
            <h3>{proyecto.empresa}</h3>
             <p>{proyecto.descripcion}</p>
             <h4>{moment(proyecto.fecha).calendar()}</h4>
             </Card> 
            </div>
            
             ) 
}
