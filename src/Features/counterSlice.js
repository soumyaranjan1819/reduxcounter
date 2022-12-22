import {createSlice } from '@reduxjs/toolkit'
const initialState = {
    count:0
}

export const counterSlice= createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            if(state.count<10){
            state.count +=1;
            }
            else
            alert('Reached maximum limit')
        },
        decrement:(state)=>{
            state.count -=1;
        },
        reset:(state)=>{
            state.count=0;
        }
    }
})

export const {increment, decrement, reset}= counterSlice.actions
export default counterSlice.reducer