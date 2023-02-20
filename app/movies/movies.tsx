'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchMovies ,   moviesActions} from '../../slices/movieSlice';
import Link from 'next/link';

export default function Items() {
  const [isLoding, setLoding] = useState(true);
  const {movies,loading} = useSelector((state:RootState)=>state.movie)

  const dispatch  = useDispatch  <AppDispatch>()
  useEffect(()=>{

    if(isLoding){
      console.log('called')
      dispatch(fetchMovies())
    }
    setLoding(false);
  },[])
    
    const path = 'https://image.tmdb.org/t/p/original'
    const router = useRouter()
const clear  = ()=>{
  dispatch(moviesActions.clear())
}
const addfav  = (item :any)=>{
  dispatch(moviesActions.addlist(item))
}

  return (
        <div>   
        <Link href={'/movies/fav'}> <h1>favorite</h1></Link> 
        <Link href={'/movies/edit'}> <h1>edit</h1></Link> 
              {
            movies.map((item : any)=>{
                return ( 
                 
                    <div key={item.id}>
                    <h1> {item.title}</h1>
                    <h4>{item.release_data}</h4>
                    <Image onClick={()=> router.push(`movies/${item.id}`)} src={path+item.poster_path} width={300} height={300} alt='movie' priority></Image> 
                    <br/>                   
                    <button onClick={()=>addfav(item)}> Mark as favorite</button>
                    </div>
                   
                )
    

            })
            
        }
        <button onClick={()=>clear()}> clear</button>
        </div>
  )
}
