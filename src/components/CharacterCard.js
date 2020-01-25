import React from "react";
import {Card} from 'reactstrap';

export default function CharacterCard(props) {

  return (

    <div>
      <Card className='card'>
        <img className='img' src={props.character.image} alt={props.character.name}/>
        <h3>{props.character.name}</h3>
        <p>{props.character.species}</p>
        <p>{props.character.gender}</p>
      </Card>
    </div>

  );
}
