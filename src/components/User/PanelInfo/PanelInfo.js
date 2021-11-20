import React from 'react';
import "./PanelInfo.scss"
import { Location, SuitCase, DataBirth } from '../../../utils/Icons';
import localization from 'moment/locale/es-mx';

import moment from 'moment';
import Avatar from '../Avatar';


export default function PanelInfo(props) {

    const {user, loggedUser} = props;
  

    return (
        <div className="panelInfoUser">
            <Avatar user={user} loggedUser={loggedUser} />

            <div className="infoUser">
                <h2 className="uName">
                    {user ? `${user.nombre} ${user.apellidos}` : "Este usuario no existe"}
                    
                </h2>
                <div className="uDetails">
                    {user?.direccion &&(
                        <span>
                            <Location />
                            {user.direccion}
                        </span>
                    )}

                    {user?.profesion &&(
                        <span>
                            <SuitCase />
                            {user.profesion}
                        </span>
                    )}

                    {user?.fechaNacimiento &&(
                        <span>
                            <DataBirth />
                            {moment(user.fechaNacimiento).locale("es", localization).format('LL')}
                        </span>
                    )}
                </div>
            </div>    
        </div>
    )
}
