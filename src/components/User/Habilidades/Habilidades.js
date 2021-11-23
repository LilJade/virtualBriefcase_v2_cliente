import React, { useState } from 'react'
import Button from '@restart/ui/esm/Button'
import { Col, Row,Image } from 'react-bootstrap'
import './Habilidades.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import { isEmpty, map } from 'lodash';
import {API_HOST} from "../../../utils/constant"
import HabilidadModal from "../../Modals/HabilidadesModal";

export default function Habilidades( props) {
    const {habilidades, user, loggedUser} = props;
    const [showModal, setShowModal] = useState(false)


    return (
        <div className="habilidades"> 
            <Row>
                <Col xs={11}>
            <h2>Habilidades</h2>
            </Col>
            <Col xs={1}>
            <Button className="editar" onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={faEdit}/>
            </Button>
            </Col>
            </Row>
                <div className="habilidadeslist">
                <Row md={5}>
           {map(habilidades, habilidad =>(
              <Habilidad key={habilidad.id} habilidad={habilidad}/>
           ))}
           </Row>
           <HabilidadModal  show={showModal} setShow={setShowModal} user={user}/>
                </div>
            
        </div>
    )
}

function Habilidad(props) {
    const {habilidad} = props;

    if(isEmpty(habilidad)){
        return <h2>No hay resultados</h2>
    }
    return (
        <Col xs={5} >
        <div className ="iconoitems">
             <Image src={`${API_HOST}/obtenerIcono?id=${habilidad.id} `} className="icono" rounded alt={habilidad.nombre} />
        </div>
        </Col>
    )
}