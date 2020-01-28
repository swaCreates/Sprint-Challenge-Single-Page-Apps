import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card} from 'reactstrap';
import {Link} from 'react-router-dom';

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
              throw new Error(err);
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
        {data.map((char,i)=> {   
          return <div className='card-container2'>
              <Card key={i} className='card'>
                <img className='img' src={char.image} alt={char.name}/>
                <h3>Name: {char.name}</h3>
                <p>Species: {char.species}</p>
                <p>Gender: {char.gender}</p>
              </Card>
            </div>
          })
        }
      </div>
    </section>
  );
}
