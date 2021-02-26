import { createSlice } from '@reduxjs/toolkit'
import getPhotos from "./actions";

// Slice

const initialUser = localStorage.getItem('image')
    ? JSON.parse(localStorage.getItem('image'))
    : null

const slice = createSlice({
    name: 'image',
    initialState: {
        image: initialImage,
    },
    reducers: {
        loadImage: (state, action) => {
            state.image = action.payload;
            localStorage.setItem('image', JSON.stringify(action.payload))
        },
    },
});

export default slice.reducer