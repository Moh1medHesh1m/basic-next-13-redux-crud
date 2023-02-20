"use client";
import { AppDispatch, RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import movieSlice, { moviesActions } from "@/slices/movieSlice";

function page() {
  const { favMovies } = useSelector((state: RootState) => state.movie);
  const path = "https://image.tmdb.org/t/p/original";
  const dispatch  = useDispatch  <AppDispatch>()
  const remove =( id:any)=>{
    console.log(id)
    dispatch(moviesActions.removeList(id))
  }
  const update =(name:any)=>{

  }
  return (
    <div>
      {favMovies.map((item: any) => {
        return (
          <div key={item.id}>
            <h1> {item.title}</h1>
            <h4>{item.release_data}</h4>
            <Image
              src={path + item.poster_path}
              width={300}
              height={300}
              alt="movie"
              priority
            ></Image>   
            <br />
            <button onClick={()=>remove(item.id)}>Clear</button>
          </div>
        );
      })}
        
    </div>
  
  );
}

export default page;
