import React from 'react';
import "./User.scss"
import BasicLayout from '../../layout/BasicLayout';
import PanelInfo from '../../components/User/PanelInfo/PanelInfo';
import TabNav from '../../components/Tabs/TabNav';
import Tab from '../../components/Tabs/Tab';

export default function User() {

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
