import React from "react";

import Container from "../Container/Container";
import { UseCart } from "../../hooks/useCart";

import styles from './Header.module.scss';

import logo from '../../assets/images/logo.png';
import basket from '../../assets/images/basket.svg';
import favorite from '../../assets/images/favorite.svg';
import user from '../../assets/images/user.svg';


const Header = ({ visibleBasket }) => {


    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__inner}>
                    <span className={styles.header__logo}>
                        <img src={logo} alt="" />
                    </span>

                    <div className={styles.header__info}>
                        <button onClick={visibleBasket} className={styles.header__basket}>
                            <img src={basket} alt="" />
                            <span>{UseCart()}</span>руб.
                        </button>

                        <button className={styles.header__favorite}>
                            <img src={favorite} alt="" />
                        </button>
                        <button className={styles.header__user}>
                            <img src={user} alt="" />
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;