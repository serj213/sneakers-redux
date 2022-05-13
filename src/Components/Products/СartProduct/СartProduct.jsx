import React from "react";

import styles from './СartProduct.module.scss';


import favorite from '../../../assets/images/favorite-cart.png';
import cartNoAdd from '../../../assets/images/cart-add.svg';
import cartAdd from '../../../assets/images/add.svg';



const СartProduct = ({ id, img, name, price, addToBakset,basketItems }) => {

    

    const [addProduct, setAddProduct] = React.useState(false);
    

    // if(basketItems.length > 0){
    //     if(basketItems.find(cart => cart.cartsId === id)){
            
    //     }
    // }


    const addCartHandle = () => {

        addToBakset({ id, img, name, price, cartsId:id })
        setAddProduct(true)
    }


    return (
        <div className={styles.cart}>
            <div className={styles.cart__imageBox}>
                <img className={styles.cart__imageImg} src={img} alt="" />
                <button>
                    <img src={favorite} alt="" />
                </button>
            </div>
            <div className={styles.cart__name}>
                {name}
            </div>

            <div className={styles.cart__bottom}>
                <div className={styles.cart__price}>
                    <p>Цена:</p>
                    <p>
                        <span>
                            {price}
                        </span> руб.
                    </p>
                </div>
                <button onClick={addCartHandle} className={styles.cart__addCart}>
                    <img src={addProduct ? cartAdd : cartNoAdd} alt="" />
                </button>
            </div>
        </div>
    )
}
export default СartProduct;