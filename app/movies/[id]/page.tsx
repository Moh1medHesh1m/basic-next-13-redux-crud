import axios from 'axios';
import React from 'react'
import Image from 'next/image';
interface movie{
  
    id: number
    title : string,
    release_data :string,
    vote_average: number
    poster_path: string
}

export default async function Movie({params}:any) {
    console.log(params)
    const id = params.id
    const path = 'https://image.tmdb.org/t/p/original'
    const movies = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=ccc8469f84797b7513d63c6b14e1429b`,
        
    
      })
        .then(function (response) {
            return  response.data
        });
  return (
    <div> 
        <h1>{movies.title}</h1>
        <h2>{movies.release_data}</h2>
        <Image src={path+movies.backdrop_path} alt={'movie'} height={500} width={500}></Image>
        <p>{movies.overview }</p>

    </div>
  )
}
