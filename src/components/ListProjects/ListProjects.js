import React, {useState, useEffect} from 'react'
import "./ListProjects.scss"
import { Image, Card, Row, Col } from 'react-bootstrap'
import {map} from "lodash"
import {getUserApi} from  "../../api/user"
import AvatarNoFound from "../../assets/png/Perfil.png"
import { API_HOST } from '../../utils/constant'
import moment from 'moment'
import { Link } from 'react-router-dom'

export default function ListProjects(props) {
    const {proyectos} = props
    return (
        <div className ="lista-proyectss">
           < div className ="listacontainer">
            {map(proyectos, (proyecto, index) => (
                   
              <Proyecto key ={index} proyecto={proyecto} />
            ))}
        </div>
         </div>
    )
}

function Proyecto(props){
    const {proyecto } = props;
    const [userInfo, setUserInfo] = useState(null)
    const [avatarUrl, setAvatarUrl] = useState(null)

    useEffect(() => {
       getUserApi(proyecto.userId).then(response =>{
           setUserInfo(response)
           setAvatarUrl(
            response?.avatar 
            ? `${API_HOST}/obtenerAvatar?id=${response.id}` :  AvatarNoFound
        )
       })
    }, [proyecto])
    return(
       
       <Card as ={Link} to={`/Proyectos/${proyecto._id}`} className ="project">
           <Card.Body>
               <Row> 
                <Col xs={3}>
        <Image
        className="avatarspro" src={avatarUrl} roundedCircle/>
       </Col>
       <Col xs={4}>  
       <div className="name">
          {userInfo?.nombre } {userInfo?.apellidos }
      </div>
      <div className="titulop ">
      {proyecto.titulo}
      </div>
      <span classNam="infop">{moment(proyecto.fecha).calendar()}</span>
      </Col>
      </Row>
        </Card.Body>
        </Card>
        
    ) ;
}