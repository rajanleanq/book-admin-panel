import { configureStore } from "@reduxjs/toolkit";
import { authAPI } from "./features/auth/api";
import { bookApi } from "./features/protected/books/book.api";
import { userApi } from "./features/protected/user/user.api";

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    [bookApi.reducerPath]: bookApi.reducer,

    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(
      authAPI.middleware,
      bookApi.middleware,
      userApi.middleware
    ),
});

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
// Store Dispatch Type
export type AppDispatch = typeof store.dispatch;
