import { combineReducers, createStore, applyMiddleware } from "redux";
import { cartReducers } from "./reducers/cartReducers";
import { baketReducer } from "./reducers/basketReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    carts: cartReducers,
    basket:baketReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));