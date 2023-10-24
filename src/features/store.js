import {configureStore} from "@reduxjs/toolkit"
import reducers from "./slices/movieSlices"
export const store=configureStore({
   reducer:{
    movies:reducers
   }
});