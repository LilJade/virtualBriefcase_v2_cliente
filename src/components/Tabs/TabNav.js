import React from 'react'
import "./TabNav.scss"

export default function TabNav() {
    return (
        <div className="TabNavContainer">
            <ul className="tabsNav">
                <li className="tabItem">
                                <a className="tabLink selected">
                                    Opcion A
                                </a>
                            </li>
                            <li className="tabItem">
                                <a className="tabLink ">
                                    Opcion B
                                </a>
                            </li>
                            <li className="tabItem">
                                <a className="tabLink ">
                                    Opcion c
                                </a>
                            </li>
{/*                {
                    this.props.tabs.map(tab => {
                        const active = (tab === this.props.selected ? 'selected' : '');
                        
                        return (
                            <li className="tabItem" key={tab}>
                                <a className={"tabLink " + active} onClick={() => this.props.setSelected(tab)}>
                                    {tab}
                                </a>
                            </li>
                        )
                    })
                }*/}
            </ul>

{/*            {this.props.children} */}
        </div>
    )
}
