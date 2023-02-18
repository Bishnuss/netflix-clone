import React from 'react'
import { useState, useEffect } from 'react'
import instance from './baseUrl'
import axios from 'axios'
import './Style.css';



function Roww({ title, fetchUrl,isLargeRow }) {
    const [movies, setMovies] = useState([])
   const base_url = "https://image.tmdb.org/t/p/original/"


    // Function to call api
    async function getData() {

        const outData = await instance.get(fetchUrl)
        setMovies(outData.data.results)
    }
    useEffect(()=>{
    getData()
},[]

    )

    console.log(movies);

    return (
            <div id='row'>

            <h2>{title}</h2>
            <div id='movies'>
                {
                   
                    movies.map(movie=>(
                        <img 
                        id={'movie'}
                        src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                        alt
                        />
                    ))
                }
            </div>
            </div>


    )
}

export default Roww