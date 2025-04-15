import { configureStore } from '@reduxjs/toolkit'

import todosApi from './api/todos-api'

export const makeStore = () => {
    return configureStore({
        reducer: {
            [todosApi.reducerPath]: todosApi.reducer,
        },
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
