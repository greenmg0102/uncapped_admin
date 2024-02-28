import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeConfigSlice from "./themeConfigSlice";
import utilConfigSlice from "./utilConfigSlice";

const rootReducer = combineReducers({
  themeConfig: themeConfigSlice,
  utilConfig: utilConfigSlice
});

export default configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
