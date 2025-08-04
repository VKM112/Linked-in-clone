import { createStore, applyMiddleware } from "redux";
import { thunk as thunkMiddleware } from "redux-thunk"; // Vite-friendly import
import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
