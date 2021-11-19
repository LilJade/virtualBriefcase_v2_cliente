import React, { useEffect, useState } from 'react';
import "./User.scss"
import BasicLayout from '../../layout/BasicLayout';
import PanelInfo from '../../components/User/PanelInfo/PanelInfo';
import TabNav from '../../components/Tabs/TabNav';
import Tab from '../../components/Tabs/Tab';
import { getUserApi } from '../../api/user';
import Swal from 'sweetalert2';
import {withRouter} from "react-router-dom"

export  function User(props) {
    const {match} = props
const [user, setUser] = useState(null);
const {params}= match

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



{/*    constructor(props) {
        super(props)
        this.state = {
            selected: 'Mis Redes'
        }
    }

    setSelected = (tab) => {
        this.setSelected({selected: tab})
    }
    */}

    return (
        <BasicLayout>
            <div className="infoUserContainer">
                <div className="infoPanel">
                    <PanelInfo />
                </div>
                <div className="tabPanel">
                    <TabNav></TabNav>

{/*                    <TabNav tabs={['Mis Redes', 'Biografía', 'Habilidades']} selected={this.state.selected} setSelected={this.setSelected}>
                        <Tab isSelected={this.state.selected === 'Mis Redes'}>
                            <p>
                                Some text
                            </p>
                        </Tab>
                        <Tab isSelected={this.state.selected === 'Biografía'}>
                            <p>
                                More text
                            </p>
                        </Tab>
                        <Tab isSelected={this.state.selected === 'Habilidades'}>
                            <p>
                                And another text
                            </p>
                        </Tab>
                    </TabNav>*/}
                </div>
            </div>
        </BasicLayout>
    )
}

export default withRouter(User);