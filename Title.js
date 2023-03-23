import React from 'react'

export default function Title({title, titleClass}){
    return(
        <div className={`title text_center title-${titleClass}`}>
            <h1>{!title ? "Title" : title}</h1>
        </div>
    )
}