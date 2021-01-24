import React from 'react'
import { CardListDetail } from '../card-list/card-list.model';

import './cards.style.css';
interface CardProps{
    monster:CardListDetail.RootObject
}
function Card(props:CardProps) {
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card
