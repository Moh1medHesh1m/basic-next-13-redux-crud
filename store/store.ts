import movieSlice from "../slices/movieSlice";
import { configureStore } from "@reduxjs/toolkit";

export function makeStore(){
        return configureStore({
            reducer :{
                movie:movieSlice  
            }
        })
}

export const store = makeStore()

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch