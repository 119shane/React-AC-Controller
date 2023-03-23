import React from 'react'

export default function Button({handleClick, name}){
    return(
        <div>
            <button onClick={handleClick} className="btn">{name}</button>
        </div>
    )
}