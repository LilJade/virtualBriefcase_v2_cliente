import React, { useEffect, useState } from 'react';
import "./User.scss"
import BasicLayout from '../../layout/BasicLayout';
import PanelInfo from '../../components/User/PanelInfo/PanelInfo';
import { getUserApi } from '../../api/user';
import Swal from 'sweetalert2';
import {withRouter} from "react-router-dom"
import useAuth from '../../hooks/useAuth';
import Tabs from "../../components/Tabs"
import { Container, Row,Button,Spinner } from 'react-bootstrap';
import { getUserProyectoApi} from "../../api/proyecto"
import ListProyecto from '../../components/ListProyecto/ListProyecto';
import {getUserHabilidadesApi} from "../../api/habilidades"

export  function User(props) {
const {match,setRefreshCheckLogin} = props
const [user, setUser] = useState(null);
const {params}= match
const loggedUser = useAuth();
const [proyectos, setProyectos] = useState(null)
const [loadingProyecto, setLoadingProyecto] = useState(false)
    const [page, setPage] = useState(1)
const [habilidades, setHabilidades] = useState(null)


useEffect(() => {
    getUserApi(params.id).then(response =>{
       if(!response){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario que has visitado no existe'
          })
       }
       setUser(response);
    }).catch(() =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario que has visitado no existe'
          })
    })
}, [params])

useEffect(() => {
    getUserProyectoApi(params.id,1)
    .then(response =>{
       setProyectos(response)
    })
    .catch(() => {
        setProyectos([]);
    })
  }, [params])
  

  useEffect(() => {
    getUserHabilidadesApi(params.id,1)
    .then(respuesta =>{
       setHabilidades(respuesta)
    })
    .catch(() => {
        setHabilidades([]);
    })
  }, [params])


  const moreData = () =>{
    const pageTemp = page +1 ;
    setLoadingProyecto(true);
    getUserProyectoApi(params.id, pageTemp).then(response =>{
        if (!response){
          setLoadingProyecto(0);
        }else {
            setProyectos([...proyectos, ...response]);
          setPage(pageTemp)
          setLoadingProyecto(false)
        }

    })
}

    return (
      <>
        {user && (
        <BasicLayout setRefreshCheckLogin={setRefreshCheckLogin}>
            <Container>
            <Row>
            <div className="infoUserContainer">
                <div className="infoPanel">
                    <PanelInfo user={user}  loggedUser={loggedUser}/>
                </div>
                <div className="tabPanel">
                    <Tabs user={user} habilidades={habilidades}  loggedUser={loggedUser}/>
                </div>
            </div>
            </Row>
            <Row>
            <div className ="proyectos">
           { proyectos &&<ListProyecto proyectos={proyectos} user={user}  loggedUser={loggedUser}/>}
           
           {proyectos ?
           (<div className="reload">
                <Button onClick={moreData} >
               {!loadingProyecto ? (
                loadingProyecto !== 0 && "Obtener mas proyectos"
               ) : (
                <Spinner as="span" animation="grow" size="sm" role="status" 
                aria-hidden="true"/>
               )}
            </Button>
            </div>
            ):( <div className="reload"> <h2>
                No hay proyectos
            </h2>
                </div>)}
           
            </div>
            </Row>
            </Container>
        </BasicLayout>)
        }
        </>
    )
}

export default withRouter(User);