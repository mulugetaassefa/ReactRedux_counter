import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', name: 'Sneakers', price: 100 },
  { id: '2', name: 'T-shirt', price: 25 },
];
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
});



export default productsSlice.reducer;
