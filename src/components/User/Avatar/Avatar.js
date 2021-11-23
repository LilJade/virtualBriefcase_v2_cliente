import React, {useState, useEffect} from 'react'
import "./Avatar.scss";
import {Button} from "react-bootstrap";
import { API_HOST } from '../../../utils/constant';
import avatarNoAvatar from '../../../assets/png/voidAvatar.png';
import ConfigModal from "../../../components/Modals/ConfigModal"
import EditUserForm from "../../User/EditUserForm"
import {checkFollowApi, followUserApi, unfollowUserApi} from "../../../api/follow";

export default function Avatar(props) {
    const{user, loggedUser} = props;
    const [showModal, setShowModal] = useState(false)
    const [following, setFollowing] = useState(null)
    const [relReloadFollow, setReloadFollow] = useState(false)
    
    
    useEffect(() => {
      if(user){
        checkFollowApi(user?.id).then(response =>{
            if(response?.status){
                setFollowing(true);
            }
            else{
              setFollowing(false);
            }
    });
      }
      setReloadFollow(false);
    }, [user,relReloadFollow])
    
    const onFollow = () => {
        followUserApi(user.id).then(() => {
            setReloadFollow(true);
        });
    }
    const onUnfollow = () =>{
        unfollowUserApi(user.id).then(() => {
            setReloadFollow(true)
        })
    }

    const avatarUrl = user?.avatar ? `${API_HOST}/obtenerAvatar?id=${user.id}` : avatarNoAvatar;
    return (
      
             <div className = "avatar" style={{backgroundImage: `url('${avatarUrl}')`}}>


  
{user && (
          <div className="options">  
                 {loggedUser._id === user.id && <Button onClick={() => setShowModal(true)}>Editar perfil</Button>}
                
                {loggedUser._id !== user.id && (
                    following !== null &&(
                    (following ? 
                    <Button  className="unfollow"  onClick={onUnfollow}>
                        <span>Siguiendo</span></Button>:<Button onClick={onFollow}>Seguir</Button>)
                        
                    )
                   
        )}
        <ConfigModal show={showModal} setShow={setShowModal} title="Editar perfil">
            <EditUserForm user={user} setShowModal={setShowModal}/>
        </ConfigModal>
    </div>
        )}
</div>
    )
}
