import React from 'react'
import "./BasicLayout.scss"
import Header from '../../components/Header'

export default function basicLayout(props) {
    const {children, setRefreshCheckLogin} = props

    return (
        <>
            <Header setRefreshCheckLogin= {setRefreshCheckLogin}></Header>
            <div className="basicLayout">
                {children}
            </div>
        </>
    )
}
