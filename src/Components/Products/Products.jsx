import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { addFetchBasketCart } from "../../asyncActions/basket";
import { addFavoriteCart } from "../../asyncActions/favorite";

import Container from "../Container/Container";
import CartProduct from './СartProduct/СartProduct';
import GridCartBox from "../GridCartBox/GridCartBox";

import styles from './Products.module.scss';



const Products = () => {

    const dispacth = useDispatch();
    const { carts, basket } = useSelector(state => state);

    const [searchValue, setSearchValue] = React.useState('');

    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value)
    }


    const addToBakset = (item) => {
        if (basket.basketCarts.length > 0 && basket.basketCarts.find(carts => carts.cartsId === item.id)) {
        }
        else {
            dispacth(addFetchBasketCart(item))
        }
    }

    const cartAdded = id => {
        return basket.basketCarts.some(item => Number(item.cartsId) === Number(id));
    }

    const addFavorie = obj => {
        dispacth(addFavoriteCart(obj))
    }

    const filterCartSearch = () => {
        const searchResult = carts.carts.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()));

        return (
            searchResult.length > 0 ? searchResult.map(cart => {
                return (
                    <CartProduct
                        key={cart.id}
                        id={cart.id}
                        img={cart.img}
                        name={cart.name}
                        price={cart.price}
                        addToBakset={addToBakset}
                        cartAdded={cartAdded}
                        addFavorie={addFavorie}
                    />
                )
            })
                :

                <div className={styles.products__notFound}>
                    Ничего не найдено
                </div>
        )

    }

    return (
        <>
            {
                !carts.loading ?
                    <section className={styles.products}>
                        <Container>
                            <div className={styles.products__inner}>
                                <div className={styles.products__top}>
                                    <h2 className={`${styles.products__title} ${styles.title}`}>
                                        {searchValue.length > 0 ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}
                                    </h2>
                                    <div className={styles.products__search}>
                                        <input onChange={(e) => onChangeSearchValue(e)} type="text" value={searchValue} placeholder="Поиск" />
                                    </div>

                                </div>

                                <GridCartBox>
                                    {
                                        searchValue.length > 0 ?
                                            filterCartSearch()
                                            :
                                            carts.carts.length > 0 && carts.carts.map((cart) => {

                                                return (
                                                    <CartProduct
                                                        key={cart.id}
                                                        id={cart.id}
                                                        img={cart.img}
                                                        name={cart.name}
                                                        price={cart.price}
                                                        addToBakset={addToBakset}
                                                        cartAdded={cartAdded}
                                                        addFavorie={addFavorie}
                                                    />
                                                )
                                            })
                                    }
                                </GridCartBox>




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