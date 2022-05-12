import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { addFetchBasketCart } from "../../asyncActions/basket";
import { fetchCarts } from "../../asyncActions/carts";
import Container from "../Container/Container";
import CartProduct from './СartProduct/СartProduct';

import styles from './Products.module.scss';



const Products = ({ visibleBasket}) => {

    const dispacth = useDispatch();
    const { carts, loading } = useSelector(state => state.carts);


    React.useEffect(() => {
        dispacth(fetchCarts());
    }, []);

    const addToBakset = (item) => {
        dispacth(addFetchBasketCart(item))

    }

    return (
        <>
            {
                !loading ?
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

                                        carts.length > 0 && carts.map((cart) => {

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