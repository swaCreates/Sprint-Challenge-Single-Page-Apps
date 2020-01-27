import React from "react";
import {Card} from 'reactstrap';

export default function CharacterCard(props) {


  return (

    <div className='card-container'>
        <Card className='card'>
          <img className='img' src={props.character.image} alt={props.character.name}/>
          <h3>Name: {props.character.name}</h3>
          <p>Species: {props.character.species}</p>
          <p>Gender: {props.character.gender}</p>
        </Card>
    </div>

  );
}
