import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCards = createAsyncThunk('cards/fetchCards',async()=>{

    const result = await axios.get('https://resto-xq63.onrender.com/restaurants');
    localStorage.setItem("allCards",JSON.stringify(result.data));
    return result.data;
})

const dishCardSlice = createSlice({
    name:'cards',
    initialState:{
        allCards:[],
        searchCards:[],
        loading:false,
        error:""
    },
    reducers:{
        searchCard : (state,action)=>{
            state.allCards = state.searchCards.filter((item)=>
            item.neighborhood.toLowerCase().includes(action.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCards.fulfilled,(state,action)=>{
            state.allCards = action.payload
            state.searchCards = action.payload
            state.loading = false
            state.error = ""
        })
        builder.addCase(fetchCards.pending,(state,action)=>{
            state.allCards = []
            state.searchCards = []
            state.loading = true
            state.error = ""
        })
        builder.addCase(fetchCards.rejected,(state,action)=>{
            state.allCards = []
            state.searchCards = []
            state.loading = false
            state.error = "API Call Failed"
        })


    }
})

export const {searchCard} = dishCardSlice.actions
export default dishCardSlice.reducer