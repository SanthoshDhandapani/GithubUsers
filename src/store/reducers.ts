import { githubApi } from "../service";
import { themeSlice } from "./themeSlice";

export { githubApi, themeSlice };

export const reducers = {
    [githubApi.reducerPath]: githubApi.reducer,
    [themeSlice.reducerPath]: themeSlice.reducer, 
}