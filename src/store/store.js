import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './homeSlicer';
import detailsReducer from './detailsSlicer'



export const store = configureStore({
    reducer: {
        home: homeReducer,
        details: detailsReducer
    },
});