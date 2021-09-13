import React from 'react'
import "./BasicLayout.scss"
import Header from '../../components/Header'

export default function basicLayout(props) {
    console.log(props)
    const {children} = props

    return (
        <>
            <Header></Header>
            <div className="basicLayout">
                {children}
            </div>
        </>
    )
}
