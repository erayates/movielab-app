import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './homeSlicer';

export const store = configureStore({
    reducer: {
        home: homeReducer
    },
});