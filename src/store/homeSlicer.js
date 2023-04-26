import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { useFetch } from '../hooks/useFetch';
import { fetchData } from '../utils/api';




export const getTrending =  createAsyncThunk('home/getTrending', (dateRange) => {
    const data = fetchData('/trending/movie/'+ dateRange);
    return data;
})

export const getMovieGenres = createAsyncThunk('home/getMovieGenres', () => {
    const data = fetchData('/genre/movie/list');
    return data;
})


const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url: {},
        movieGenres: {},
        tvGenres: {},
        trending:[],

    },
    reducers: {
        getApiConfiguration: (state,action) => {
            state.url = action.payload;
        },
        getGenres: (state,action) => {
            state.genres = action.payload;
        },
    
    
    },


    extraReducers:{
        [getTrending.fulfilled]: (state,action) => {
            state.trending = action.payload;
            
        },
        [getTrending.rejected]: (state,action) => {
            console.log(action.error.message);
     
        },
        [getTrending.pending]: (state,action) => {
            console.log('pending');
        },

        [getMovieGenres.fulfilled]: (state,action) => {
            state.movieGenres = action.payload;    
        },
        [getMovieGenres.rejected]: (state,action) => {
            console.log(action.error.message);
     
        },
        [getMovieGenres.pending]: (state,action) => {
            console.log('pending');
        }



        
    }
})

export const {getApiConfiguration,getGenres} = homeSlice.actions;
export default homeSlice.reducer;