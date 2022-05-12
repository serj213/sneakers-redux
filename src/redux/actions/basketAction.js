import { ADD_BASKET, GET_BASKET,REMOVE_BASKET } from "../actionConstants";



export const getBasket = (carts) => {
    return { type: GET_BASKET, payload: carts }
}

export const addbasketAction = (basketObj) => {
    return { type: ADD_BASKET, payload: basketObj }
}

export const removeBasketCart = (obj) => {
    
    return { type: REMOVE_BASKET, payload:obj }
}   