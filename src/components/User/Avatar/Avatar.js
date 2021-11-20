import React, {useState, useEffect} from 'react'
import {Button} from "react-bootstrap";
import { API_HOST } from '../../../utils/constant';
import "./Avatar.scss";
import avatarNoAvatar from '../../../assets/png/voidAvatar.png';
import ConfigModal from "../../../components/Modals/ConfigModal"
import EditUserForm from "../../User/EditUserForm"
import {checkFollowApi, followUserApi, unfollowUserApi} from "../../../api/follow";

export default function Avatar(props) {
    const{user, loggedUsers} = props;
    const [showModal, setShowModal] = useState(false)
    const [following, setFollowing] = useState(null)
    const [reloadFollow, setReloadFollow] = useState(false)
    console.log(user)
    const onFollow = () => {
        followUserApi(user.id).then(() => {
            setReloadFollow(true);
        });
    }
    const avatarUrl = user?.avatar ? `${API_HOST}/obtenerAvatar?id=${user.id}` : avatarNoAvatar;
    return (
      
             <div className = "avatar" style={{backgroundImage: `url('${avatarUrl}')`}}>


{user && (
     <div className="options"> 
<Button onClick={() => setShowModal(true)}>Editar perfil</Button>

 <ConfigModal show={showModal} setShow={setShowModal} title="Editar perfil">
 <EditUserForm user={user} setShowModal={setShowModal}/>
 </ConfigModal>

      </div>

)}
</div>
    )
}
