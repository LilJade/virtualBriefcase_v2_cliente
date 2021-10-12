import React, { useEffect } from 'react';
import "./PanelInfo.scss"
import { useState } from 'react';
import { API_HOST } from '../../../utils/constant';
import avatarNoAvatar from '../../../assets/png/voidAvatar.png';
import { checkFollowApi, followUserApi, unfollowUserApi } from '../../../api/follow';
import { Location, SuitCase, DataBirth } from '../../../utils/Icons';
import localization from 'moment/locale/es-mx';
import { Button } from 'react-bootstrap';
import configModal from '../../Modals/ConfigModal';
import EditUserForm from '../../User/EditUserForm';
import moment from 'moment';

export default function PanelInfo(props) {

    const {user, loggedUser} = props;
    const [showModal, setShowModal] = useState(false);
    const [following, setFollowing] = useState(null);
    const [reloadFollow, setReloadFollow] = useState(false)

    const avatarUrl = user?.avatar ? `${API_HOST}/obtenerAvatar?id=${user.id}` : avatarNoAvatar;

    useEffect(() => {
        if (user) {
            checkFollowApi(user?.id).then(response => {
                if (response?.status) {
                    setFollowing(true);
                } else {
                    setFollowing(false);
                }
            });

            setReloadFollow(false);
        }
    }, [user, reloadFollow])

    const onFollow = () => {
        followUserApi(user.id).then(() => {
            setReloadFollow(true);
        });
    }

    const onUnFollow = () => {
        unfollowUserApi(user.id).then(() => {
            setReloadFollow(true);
        });
    }

    return (
        <div className="panelInfoUser">
            <div className="avatar">
                <img src={avatarNoAvatar}/>
            </div>
            <div className="infoUser">
                <h2 className="uName">
                    {/*
                    {user ? `${user.nombre} ${user.apellidos}` : "Este usuario no existe"}
                    */}
                    Josué Antonio Duran Estupinian
                </h2>
                <div className="uDetails">
                    <span>
                        <Location />
                        Chalatenango, El Salvador
                    </span>
                    <span>
                        <SuitCase />
                        Programador Analista
                    </span>
                    <span>
                        <DataBirth />
                        10 de Octubre de 1999
                    </span>
                    {/*
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
                    )} */}
                </div>
            </div>
            {/*
            {user &&(
                <div className="uOptions">
                    {loggedUser._id === user.id && <Button onClick={() => setShowModal(true)}>Editar Perfil</Button>}

                    {loggedUser._id !== user.id && (
                        following !== null && (
                            (following ? <Button onClick={onUnFollow} className="unfollow"><span>Siguiendo</span></Button>:<Button onClick={onFollow}>Seguir</Button>)
                        )
                    )}

                    <configModal show={showModal} setShow={setShowModal} title="Editar perfil">
                        <EditUserForm user={user} setShowModal={setShowModal}/>
                    </configModal>
                </div>
            )} */}
            <Button onClick={() => setShowModal(true)}>Editar Perfil</Button>
        </div>
    )
}
