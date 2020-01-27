import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import {Link} from 'react-router-dom';
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [char, setChar]= useState([]);

  useEffect(() => {

    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res=> {
      console.log(res.data.results);
      setChar(res.data.results);
    })
    .catch(err=> console.log('This is my error ', err));

  }, []);

  // console.log(char);

  return (
    <section className="character-list">
      <Link to='/'>Back to Welcome Page</Link>
      {/* <Link className='search' to='/search'>Search</Link> */}
      <SearchForm/>
      <div className='characters'>
        {char.map((el) =>{
          return <CharacterCard key={el.id} character={el} />
        })}
      </div>

    </section>
  );
}
