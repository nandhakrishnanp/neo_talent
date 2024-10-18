// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import authSlice from "./authSlice";




const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
    authentication: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  immutableCheck: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "KEY_PREFIX",
          "FLUSH",
          "REHYDRATE",
          "PAUSE",
          "PERSIST",
          "PURGE",
          "REGISTER",
        ],
      },
    }),
});

// to reset store
export const resetStore = () => {
  persistor.purge();
  store.dispatch({ type: "RESET" });
};

const persistor = persistStore(store);

export { store, persistor };
