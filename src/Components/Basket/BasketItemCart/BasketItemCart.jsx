import React from "react";

import styles from './BasketItemCart.module.scss';

import deleteImg from '../../../assets/images/delete.svg';

const BasketItemCart = ({ img, name, price, deleteCart }) => {
    return (
        <div className={styles.basketItemCart}>
            <div className={styles.basketItemCart__img}>
                <img src={img} alt="" />
            </div>
            <div className={styles.basketItemCart__textInfo}>
                <div className={styles.basketItemCart__name}>
                    {name}
                </div>

                <p className={styles.basketItemCart__price}>
                    <span>{price}</span> руб.
                </p>

            </div>
            <button onClick={deleteCart} className={styles.basketItemCart__delete}>
                <img src={deleteImg} alt="" />
            </button>
        </div>
    )
}

export default BasketItemCart;