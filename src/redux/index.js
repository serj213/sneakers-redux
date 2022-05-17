import { combineReducers, createStore, applyMiddleware } from "redux";
import { cartReducers } from "./reducers/cartReducers";
import { baketReducer } from "./reducers/basketReducers";
import { favoriteReducer } from "./reducers/favoriteReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    carts: cartReducers,
    basket: baketReducer,
    favorite: favoriteReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));