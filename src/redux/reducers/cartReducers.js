
import { GET_CARTS } from "../actionConstants";

const initialState = {
    carts: [],
    loading: true
}




export const cartReducers = (state = initialState, action) => {

    switch (action.type) {

        case GET_CARTS:
            return { ...state, carts:[...state.carts, ...action.payload], loading:false }

        default:
            return state;
    }
}