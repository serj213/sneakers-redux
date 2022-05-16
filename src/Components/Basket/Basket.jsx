import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { removeFetchBasketCart } from "../../asyncActions/basket";

import { UseCart } from "../../hooks/useCart";

import BasketItemCart from "./BasketItemCart/BasketItemCart";

import styles from './Basket.module.scss';



const Basket = ({ visibleBasket }) => {

    const { basketCarts } = useSelector(state => state.basket);

    const dispatch = useDispatch();

    const deleteCartToBasket = (obj) => {
        dispatch(removeFetchBasketCart(obj));
    }


    return (
        <div className={styles.basket} onClick={visibleBasket}>
            <div className={styles.basket__body} onClick={e => e.stopPropagation()}>
                <div className={styles.basket__title}>
                    Корзина
                </div>
                <div className={styles.basket__list}>

                    {
                        basketCarts.length > 0 &&
                        basketCarts.map(cart => <BasketItemCart key={cart.id} 
                            deleteCart={() => deleteCartToBasket(cart)}  
                            {...cart} />)
                    }


                </div>
                <div className={styles.basketBottom}>
                    <div className={styles.basketBottom__item}>
                        <p className={styles.basketBottom__name}>
                            Итого:
                        </p>
                        <div className={styles.basketBottom__dots}>
                        </div>

                        <p className={styles.basketBottom__price}>
                            {UseCart()} руб.
                        </p>
                    </div>

                    <div className={styles.basketBottom__item}>
                        <p className={styles.basketBottom__name}>
                            Налог 5%:
                        </p>
                        <div className={styles.basketBottom__dots}>
                        </div>

                        <p className={styles.basketBottom__price}>
                            {Math.ceil(UseCart() * 0.05)} руб.
                        </p>
                    </div>

                    <button>
                        Оформить заказ
                    </button>
                </div>

            </div>
        </div>
    )

}

export default Basket;