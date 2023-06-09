import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import { fetchData } from '../utils/api';


export const getTrending =  createAsyncThunk('home/getTrending', (dateRange) => {
    const data = fetchData('/trending/movie/'+ dateRange);
    return data;
})

export const getPopular = createAsyncThunk('home/getPopular', (mediaType) => {
    const data = fetchData(`/${mediaType}/popular`);
    return data;
})

export const getGenres = createAsyncThunk('home/getGenres', () => {
    var genreList = [];
    const data = fetchData('/genre/movie/list');
    const data2 = fetchData('/genre/tv/list');

    return Promise.all([data,data2]).then((values) => {
        var fetchedMovieGenres = values[0].genres;
        var fetchedTvGenres = values[1].genres;
        genreList = fetchedMovieGenres.filter((genre) => fetchedTvGenres.find((genre2) => genre2.id !== genre.id));
        return genreList;

    })
        
})


export const getTopRated = createAsyncThunk('home/getTopRated', (mediaType) => {
    const data = fetchData(`/${mediaType}/top_rated`);
    return data;
})


const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url: {},
        genres:{},
        trending:[],
        popular:[],
        topRated: [],


    },
    reducers: {
        getApiConfiguration: (state,action) => {
            state.url = action.payload;
        },
    },


    extraReducers:{
        // Trending Medias
        [getTrending.fulfilled]: (state,action) => {
            state.trending = action.payload;
            
        },

        // Popular Medias
        [getPopular.fulfilled]: (state,action) => {
            state.popular = action.payload;
        },
   
        // Top Rated
        [getTopRated.fulfilled]: (state,action) => {
            state.topRated = action.payload;
        },


        // Movie Genres 
        [getGenres.fulfilled]: (state,action) => {
            state.genres = action.payload;    
        },
 



        
    }
})

export const {getApiConfiguration} = homeSlice.actions;
export default homeSlice.reducer;