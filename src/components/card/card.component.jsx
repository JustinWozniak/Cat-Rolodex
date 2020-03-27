import React from 'react'
import './card.styles.css'

export const Card = (props) => (

    <div className="card-container">
        <img alt="Cats" src={`https://robohash.org/${props.cat.id}?set=set4&size=180x180`} />
        <h1>{props.cat.name}</h1>
        <h2>{props.cat.email}</h2>
    </div >
)



