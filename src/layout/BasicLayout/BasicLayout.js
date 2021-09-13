import React from 'react'
import "./BasicLayout.scss"
import Header from '../../components/Header'

export default function basicLayout(props) {
    console.log(props)
    const {children} = props

    return (
        <div>
            <Header></Header>
            <h1>Basic Layout</h1>
            {children}
        </div>
    )
}
