import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { addFetchBasketCart } from "../../asyncActions/basket";
import { fetchCarts } from "../../asyncActions/carts";
import Container from "../Container/Container";
import CartProduct from './СartProduct/СartProduct';

import styles from './Products.module.scss';



const Products = () => {

    const dispacth = useDispatch();
    const { carts, basket } = useSelector(state => state);




    React.useEffect(() => {
        dispacth(fetchCarts());
    }, []);

    const addToBakset = (item) => {
        if (basket.basketCarts.length > 0 && basket.basketCarts.find(carts => carts.cartsId === item.id)) {
        }
        else {
            dispacth(addFetchBasketCart(item))
        }
 

    }

    if (basket.basketCarts.length > 0) {

    }


    return (
        <>
            {
                !carts.loading ?
                    <section className={styles.products}>
                        <Container>
                            <div className={styles.products__inner}>
                                <div className={styles.products__top}>
                                    <h2 className={styles.products__title}>
                                        Все кроссовки
                                    </h2>
                                    <div className={styles.products__search}>
                                        <input type="text" placeholder="Поиск" />
                                    </div>

                                </div>

                                <div className={styles.products__box}>

                                    {

                                        carts.carts.length > 0 && carts.carts.map((cart) => {

                                            return (
                                                <CartProduct
                                                    key={cart.id}
                                                    id={cart.id}
                                                    img={cart.img}
                                                    name={cart.name}
                                                    price={cart.price}
                                                    addToBakset={addToBakset}
                                                    dispacth={dispacth}
                                                />
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </Container>
                    </section>

                    :

                    <div>
                        Идёт загрузка
                    </div>
            }

        </>
    )
}

export default Products;