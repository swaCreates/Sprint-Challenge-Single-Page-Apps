import React, { useState, useEffect } from "react";
import CharacterList from './CharacterList';

export default function SearchForm() {

  const [search, setSearch]= useState('');
  const [filteredNames, setFilteredNames]= useState([]);

  // useEffect(()=> {
  //   const filtered = CharacterList.filter(charName => charName.includes(search));
  //   setFilteredNames(filtered);
  // }, [search]);
 
  return (

    <section className="search-form">
      <form className='form'>
        <input type='text' placeholder='search...' />
      </form>
    </section>
  );
}
