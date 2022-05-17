import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchFavoriteCarts } from "../../asyncActions/favorite";

import Layout from "../Layout/Layout";
import Container from "../Container/Container";
import GridCartBox from '../GridCartBox/GridCartBox';
import CartProduct from '../Products/СartProduct/СartProduct';

import styles from './Favorites.module.scss';

import smailImg from '../../assets/images/favorite-image.png';


const Favorites = () => {

    const dispatch = useDispatch();
    const { favoriteCarts } = useSelector(state => state.favorite)

    // console.log('favoriteCarts ', favoriteCarts);


    return (

        <Container>
            {
                favoriteCarts.length > 0 ?
                    <>
                        <div className={styles.favorite__top}>
                            <h1 className={styles.title}>
                                Мои закладки
                            </h1>
                            <button>
                                <img src="" alt="" />
                            </button>
                        </div>

                        <GridCartBox>
                            {
                                favoriteCarts.length > 0 &&
                                favoriteCarts.map(cart => {
                                    // console.log(cart.img);
                                    // debugger
                                    return <CartProduct key={cart.id} {...cart} />
                                })


                            }
                            {/* <CartProduct /> */}
                        </GridCartBox>
                    </>

                    :

                    <div className={styles.favorite__notFound}>
                        <img src={smailImg} alt="" />
                        <h3 className={styles.favorite__message}>
                            Закладок нет :(
                        </h3>
                        <p className={styles.favorite__descrition}>
                            Вы ничего не добавляли в закладки
                        </p>
                    </div>
            }
        </Container>

    )

}

export default Favorites;