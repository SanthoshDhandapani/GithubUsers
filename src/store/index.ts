import { configureStore } from "@reduxjs/toolkit";
import {githubApi, reducers} from './reducers';

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(githubApi.middleware),
});
