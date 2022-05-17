import { GET_FAVORITE, ADD_FAVORITE } from "../actionConstants";



export const getFavoriteAction = (favorites) => {
    return { type: GET_FAVORITE, payload: favorites }
}


export const addFavoriteAction = (favorite) => {
    return { type: ADD_FAVORITE, payload: favorite }
}