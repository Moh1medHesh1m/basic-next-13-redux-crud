import axios from 'axios';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Items from './movies';

interface movie{
  
    id: number
    title : string,
    release_data :string,
    vote_average: number
    poster_path: string
}

export default async function Movies() {
    // const path = 'https://image.tmdb.org/t/p/original'
    // const movies = await axios({
    //     method: 'get',
    //     url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.Api_Key}`,
        
    
    //   })
    //     .then(function (response) {
    //         console.log(response.data.results)
    //         return  response.data.results
    //     });
  return (
    <div>

       <Items />





    </div>
  )
}
