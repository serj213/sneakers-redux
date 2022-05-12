import axios from 'axios';
import { cartAction } from '../redux/actions/cartAction';

export const fetchCarts = () => {
    return dispacth => {
        axios.get('https://62542cf389f28cf72b59663a.mockapi.io/cartItem').then(({ data }) => {
            dispacth(cartAction(data));
        }).catch(() => {
            alert('error')
        })
    }
}