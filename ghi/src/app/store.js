import { configureStore } from '@reduxjs/toolkit'
import { Api } from './apiSlice'


export const store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api.middleware)
})
