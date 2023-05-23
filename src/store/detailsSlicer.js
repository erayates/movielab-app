import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import { fetchData } from '../utils/api';

export const getDetails = createAsyncThunk('details/getDetails', async ({mediaType,id}) => {
    const data = await fetchData(`/${mediaType}/${id}`);
    return data;

})

export const getVideos = createAsyncThunk('details/getVideos', async ({mediaType,id}) => {
    const data = await fetchData(`/${mediaType}/${id}/videos`);
    return data;
})

export const getSimilar = createAsyncThunk('details/getSimilarMovies', async ({mediaType,id}) => {
    const data = await fetchData(`/${mediaType}/${id}/similar`);
    return data;
})

export const getRecommendations = createAsyncThunk('details/getRecommendations', async ({mediaType,id}) => {
    const data = await fetchData(`/${mediaType}/${id}/recommendations`);
    return data;
})

export const getCasts = createAsyncThunk('details/getCasts', async ({mediaType,id}) => {
    const data = await fetchData(`/${mediaType}/${id}/credits`);
    return data;
})

const detailsSlice = createSlice({
    name: 'details',
    initialState: {
        details:[],
        videoPopupOpen: false,
        videoId: '',
        videos: [],
        similar: [],
        casts: []
    },

    reducers: {
        handleVideoPopupToggle: (state,action) => {
            state.videoPopupOpen = !state.videoPopupOpen
        },
        setVideoId:(state,action) => {
            state.videoId = action.payload
        }
    },

    extraReducers:{
        [getDetails.fulfilled]: (state,action) => {
            state.details = action.payload;
        },
        [getDetails.pending]: (state,action) => {
            state.details = [];
        },
    
        [getVideos.fulfilled]: (state,action) => {
            state.videos = action.payload.results;
        },
        [getVideos.pending]: (state,action) => {
            state.videos = [];
        },

        [getVideos.rejected]: (state,action) => {
            console.log(action.error);
        },

        [getSimilar.fulfilled]: (state,action) => {
            state.similar = action.payload.results;
        },

        [getSimilar.pending]: (state,action) => {
            state.similar = [];
        },

        [getRecommendations.fulfilled]: (state,action) => {
            state.recommendations = action.payload.results;
        },

        [getRecommendations.pending]: (state,action) => {
            state.recommendations = [];
        },

        [getCasts.fulfilled]: (state,action) => {
            state.casts = action.payload.cast;
        },

        [getCasts.pending]: (state,action) => {
            state.casts = [];
        }
    },
})

export const {handleVideoPopupToggle, setVideoId} = detailsSlice.actions
export default detailsSlice.reducer;