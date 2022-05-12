import { GET_CARTS } from "../actionConstants"


export const cartAction = (carts) => {
    return { type: GET_CARTS, payload: carts }
}