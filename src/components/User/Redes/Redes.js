import React from 'react'
import {Facebook,Twitter,Instagram,Correo} from "../../../utils/Icons"
import "./Redes.scss"

export default function Redes(props) {
    const {user} = props;
    return (
        <div className ="redes">
                     <h2> Mis Redes Sociales</h2>
                     <h3>¡Contáctame!</h3>
                     <div className="datos">
                     {user?.facebook &&(
                         <p>
                             <Facebook/>
                            {user.facebook}
                         </p>
                     )}
                     
                     {user?.twitter &&(
                         <p>
                             <Twitter/>
                        {user.twitter}
                         </p>
                     )}
                     
                     {user?.instagram &&(
                         <p>
                             <Instagram/>
                          {user.instagram}
                         </p>
                     )}
                     
                     {user?.email &&(
                         <p>
                         <Correo/> {user.email}
                         </p>
                     )}
                     </div>
        </div>
    )
}
