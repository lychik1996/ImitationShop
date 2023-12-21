import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

let store = configureStore({
    reducer:{
        [api.reducerPath]:api.reducer,
    },
    middleware:data=>
    data().concat(api.middleware)
})
export default store;