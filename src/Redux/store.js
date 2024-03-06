import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, postReducer);

export const store = configureStore({
  reducer: {
    posts: persistedReducer,
  },
});

export const persistor = persistStore(store);

