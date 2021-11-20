import React from 'react';
import './Biografia.scss';

export default function Biografia(props) {
    const {user} = props;
    
    return (
        <div className="bio-container">
        <h2>Biografia</h2>
        {user?.biografia &&  (
        <p>{user.biografia}</p>)
            }	
        </div>
    )
}
