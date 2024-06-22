import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import tableDataReducer from './tableDataSlice';
import modalReducer from './modalSlice';
import userReducer from './userSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const appStore = configureStore({
    reducer: {
        search: searchReducer,
        tableData: tableDataReducer,
        modal: modalReducer,
        user: userReducer
    }
});

export const useAppDispatch:()=> typeof appStore.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof appStore.getState>>=useSelector;

// Get the type of our store variable
// export type AppStore = typeof appStore
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = AppStore['dispatch']