import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import { fetchData } from '../utils/api';



export const getDetails = createAsyncThunk('details/getDetails', (mediaType,id) => {
    const data = fetchData(`/${mediaType}/${id}`);
    return data;
})

const detailsSlice = createSlice({
    name: 'home',
    initialState: {
        details:[],
        videoPopupOpen: false,
        videoId: '',
        
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
            console.log(action.payload)
        },
        [getDetails.pending]: (state,action) => {
            state.details = [];
        },
        [getDetails.rejected]: (state,action) => {
            console.log(action.error.message);
        }
    },

})

export const {handleVideoPopupToggle, setVideoId} = detailsSlice.actions
export default detailsSlice.reducer;