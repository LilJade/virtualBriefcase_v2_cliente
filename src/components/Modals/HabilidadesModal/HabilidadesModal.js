import React, { useEffect, useState } from 'react'
import { Col, Form, Image, Modal, Row } from 'react-bootstrap'
import "./HabilidadesModal.scss"
import {Close,Check} from "../../../utils/Icons";
import { isEmpty, map } from 'lodash';
import {followHabilidadApi, getHabilidadesApi, getUserHabilidadesApi, unfollowHabilidadApi} from "../../../api/habilidades"
import {API_HOST} from "../../../utils/constant"

export default function HabilidadesModal(props) {
    const {show, setShow, user} = props;
    const [MisHabilidades, setMisHabilidades] = useState(null);
    const [reloadFollow, setReloadFollow] = useState(false);
    const [formData, setFormData] = useState(initialFormValue);
    const [Habilidades, setHabilidades] = useState(null);
    
    
    const onChange = e => {
    setFormData({   ...formData, [e.target.name]: e.target.value  })
    }

    useEffect(() => {
        getUserHabilidadesApi(user.id,1)
        .then(respuesta =>{
            setMisHabilidades(respuesta)
        })
        .catch(() => {
            setMisHabilidades([]);
        })
        setReloadFollow(false)
      }, [user.id, setMisHabilidades,reloadFollow])

      
      useEffect(() => {
        getHabilidadesApi(formData.search)
        .then(respuesta =>{
           setHabilidades(respuesta)
        })
        .catch(() => {
            setHabilidades([]);
        })
        setReloadFollow(false)
      }, [formData.search, setHabilidades,reloadFollow])


    
    const onSubmit = (e) =>{

    }

    
    return (
        <Modal className="habilidades-modal"  show={show}
        onHide={() => setShow(false)}
        centered
        size="lg">
            <Modal.Header>
                <Modal.Title>
                <Close onClick={() => setShow(false)} />
                <h2>Habilidades</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {isEmpty(MisHabilidades) ?(    <div className="habilidades-escoger">
                     <h3> Habilidad</h3>
                <input type="text" placeholder= {"Busca una herramienta"}  value={formData.search}  name="search" onChange={onChange}/>
                {map(Habilidades, habilidade =>(
              <HabilidadMas key={habilidade.id} habilidade={habilidade}  setReloadFollow={setReloadFollow}/>
           ))}
                </div> ):(null) }

                {MisHabilidades?.length  <5 &&(
                <div className="habilidades-escoger">
                     <h3> Habilidad</h3>
                <input type="text" placeholder= {"Busca una herramienta"}  value={formData.search}  name="search" onChange={onChange} />
                {map(Habilidades, habilidade =>(
              <HabilidadMas key={habilidade.id} habilidade={habilidade}  setReloadFollow={setReloadFollow}/>
           ))}
                </div>)
                }

                <div className="mishabilidades">
                <h3>Mis Habilidades</h3>
                {map(MisHabilidades, habilidad =>(
              <HabilidadMe key={habilidad.id} habilidad={habilidad}  setReloadFollow={setReloadFollow}/>
           ))}
                </div>
            </Modal.Body>
        </Modal>
    )
}

function HabilidadMe(props) {
    const {habilidad,setReloadFollow} = props;
    
    const onCloseHabilidad = () =>{
        unfollowHabilidadApi(habilidad.id).then(() => {
            setReloadFollow(true);
        })
    }
    return ( 
        <div className ="iconoitemsModel">
            <div className="iconoscontainer"> 
              <Row>
                <Col xs={1}>
             <Image src={`${API_HOST}/obtenerIcono?id=${habilidad.id} `} className="iconos"  alt={habilidad.nombre} />
             </Col>
             <Col xs={4}>
             <h4>{habilidad.nombre}</h4>
             </Col>
             <Col  xs={3}>
             <Close onClick={onCloseHabilidad}  />
             </Col>
             </Row>
             </div>
        </div>
      
    )
}

function HabilidadMas(props) {
    const {habilidade,setReloadFollow} = props;
    
    const onOpenHabilidad = () =>{
        followHabilidadApi(habilidade.id).then(() => {
            setReloadFollow(true);
        })
    }
    return ( 
        <div className ="iconoitemsModel">
            <div className="iconoscontainer"> 
              <Row>
                <Col xs={1}>
             <Image src={`${API_HOST}/obtenerIcono?id=${habilidade.id} `} className="iconos"  alt={habilidade.nombre} />
             </Col>
             <Col xs={4}>
             <h4>{habilidade.nombre}</h4>
             </Col>
             <Col  xs={3}>
             <Check onClick={onOpenHabilidad}  />
             </Col>
             </Row>
             </div>
        </div>
      
    )
}


function initialFormValue() {
    return {
       search: ""
    }
}