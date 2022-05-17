import axios from "axios";

import { getFavoriteAction } from '../redux/actions/favoriteAction';

export const fetchFavoriteCarts = () => {
    return dispatch => {
        axios.get('https://62542cf389f28cf72b59663a.mockapi.io/favorite').then(({ data }) => {
            dispatch(getFavoriteAction(data));
        }).catch(() => alert('Ошибка при получении избранных'))
    }
}


export const addFavoriteCart = (obj) => {
    return dispatch => {
        axios.post('https://62542cf389f28cf72b59663a.mockapi.io/favorite', obj).then(({ data }) => {
            console.log(data);;
        }).catch(() => alert('Ошибка при получении избранных'))
    }
}