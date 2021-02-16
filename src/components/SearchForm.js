import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card} from 'reactstrap';
import {Link} from 'react-router-dom';
import CharacterCard from './CharacterCard';

export default function SearchForm() {

  const [data ,setData] = useState([]);
  const [filtered ,setFilterd] = useState([]);
  const [result , setResult] = useState('');

  useEffect(()=>{
    const fetchData = async ()=> {
            try{
              const res = await axios.get(`https://rickandmortyapi.com/api/character/`);
              setData(res.data.results);
              setFilterd(res.data.results);
            }
            catch(err){
              console.log(`This is my error: `,err);
            }
             };
          fetchData(); 
  },[]);

  useEffect(()=> {
      const results = filtered.filter(res=> res.name.toLowerCase().includes(result)

      ); 
      setData(results)
  } ,[result])

  const onChange =(e)=> {
    setResult(e.target.value);
  }

  console.log(data);
 
  return (
    <section className='characters' className="search-form">
      <Link to='/'>Back to Welcome Page</Link>
      <form className='form'>
        <input 
          type='text' 
          placeholder='search...'
          value={result}
          onChange={onChange}
        />
      </form>
      <div className='filter-characters'>
        {data.map((character)=> { 
          return <CharacterCard character={character}/>
          })
        }
      </div>
    </section>
  );
}
