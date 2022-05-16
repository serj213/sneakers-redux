import React from "react";

import { useSelector } from "react-redux";


export const UseCart = () => {

    const { basketCarts } = useSelector(state => state.basket)

    return basketCarts.length > 0 && basketCarts.reduce((sum, cart) => sum + Number(cart.price), 0);
}