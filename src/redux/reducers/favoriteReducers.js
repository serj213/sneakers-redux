import { GET_FAVORITE, ADD_FAVORITE } from "../actionConstants";


const initialState = {
    favoriteCarts: [],
}



export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVORITE:
            return { ...state, favoriteCarts: [...state.favoriteCarts, ...action.payload] }

        case ADD_FAVORITE:
            return {
                ...state,
                favoriteCarts: [...state.favoriteCarts, ...action.payload]
            }

        default:
            return state;
    }
}

