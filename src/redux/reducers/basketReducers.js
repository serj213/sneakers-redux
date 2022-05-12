import { ADD_BASKET, GET_BASKET, REMOVE_BASKET } from "../actionConstants";


const initialState = {
    basketCarts: [],
    totalPrice:0
}



export const baketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASKET:
            return { ...state, basketCarts: [...state.basketCarts, action.payload] }

        case GET_BASKET:
            return {...state, basketCarts:[...state.basketCarts, ...action.payload]}
        
        case REMOVE_BASKET:
            return {...state, 
                basketCarts:state.basketCarts.filter((card) => card.id != action.payload.id)
            }


        default:
            return state;
    }
}

