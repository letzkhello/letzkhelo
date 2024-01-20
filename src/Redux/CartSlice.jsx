// "use client";
// import {createSlice} from "@reduxjs/toolkit"
// const cartSlice = createSlice({
//     name:"Cart",
//     initialState:[],

//     reducers:{
//         add(state,action){
//             state.push(action.payload)
//         },
//         remove(state,action){
//             return state.filter((item)=>item.id !== action.payload);
//         }
        
//     }
// })

// export const {add,remove} =cartSlice.actions;
// export default cartSlice.reducer;
"use client";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    remove(state, action) {
      const removedItem = state.items.find((item) => item._id === action.payload);

      if (removedItem) {
        state.items = state.items.filter((item) => item._id !== action.payload);
        state.total -= removedItem.price;
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
