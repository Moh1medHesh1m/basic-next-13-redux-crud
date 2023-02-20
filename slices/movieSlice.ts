import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchMovies = createAsyncThunk('users/getAllUsers',async (thunkApi)=>{
    console.log('fetch api')
    const movies = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=ccc8469f84797b7513d63c6b14e1429b`,
        
    
      })
        .then(function (response) {
            console.log(response.data.results)
            return  response.data.results
        });

        return movies
})

const initialState={
    movies :[],
    favMovies :[],
    loading: false,
} as any



const movieSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        clear: (state)=>{
                state.movies = []
        },
        addlist : (state,action)=>{

        const found = state.favMovies.find((movie :any)=> movie.id === action.payload.id)
        if(!found){
            console.log(found)
            state.favMovies.push(action.payload)
        }

        },
        edit: (state,action)=>{
            const find = state.movies.find((movie :any)=> movie.title === action.payload.name)
            const index = state.movies.indexOf(find)
           
            if(find){
                 find.title = action.payload.newName
                state.movies.splice(index, 1, find);
                // state.movies = [...find,{title:action.payload.newName  }]
             }
             console.log(state.movies)
         },
        removeList: (state,action)=>{
           const filtered = state.favMovies.filter((movie :any)=> movie.id !== action.payload)
            state.favMovies =filtered
        }
    },
    
    extraReducers:(builder)=>{
        builder.addCase(fetchMovies.fulfilled,(state,action)=>{
            state.loading = false
            console.log(action.payload)
            state.movies.push(...action.payload)
        }),
        builder.addCase(fetchMovies.pending, (state, action) => {
            state.loading = true;
          });
    }
})

export default movieSlice.reducer
export const moviesActions =  movieSlice.actions;