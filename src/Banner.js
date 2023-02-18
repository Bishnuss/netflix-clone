import React from 'react'
import { useState, useEffect } from 'react'
import instance from './baseUrl'
import './Banner.css'



function Banner({fetchUrl}) {

    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"
 
 
     // Function to call api
     async function getData() {
 
         const outData = await instance.get(fetchUrl)
         setMovies(outData.data.results[
            Math.floor(Math.random()*outData.data.results.length-1)
         ])
     }
     useEffect(()=>{
     getData()
 },[]
 
     )
    //  console.log(movies);
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str
    }
 
  return (
    <div id='banner'
    style={{
        backgroundImage:`url(${base_url}${movies?.backdrop_path})`
    }}
    
    >
        <div id='content'>
            <h2 id='title'>{movies?.name}</h2>
            <h5 id='desc'>
                {truncate(movies?.overview,500)}</h5>
        </div>

    </div>
  )
}

export default Banner