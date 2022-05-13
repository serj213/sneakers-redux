import axios from "axios";
import { addbasketAction, getBasket, removeBasketCart } from "../redux/actions/basketAction";


export const fetchBasketCart = () => {
    return dispatch => {
        axios.get('https://62542cf389f28cf72b59663a.mockapi.io/basket')
            .then(({ data }) => {
                dispatch(getBasket(data));
            }).catch(() => {
                alert('Ошибка')
            })
    }
}

export const addFetchBasketCart = (obj) => {
    return dispatch => {
        axios.post('https://62542cf389f28cf72b59663a.mockapi.io/basket', obj)
            .then(({ data }) => {
                dispatch(addbasketAction(data))
            })
            .catch(() => {
                alert('Ошибка')
            })
    }
}

export const removeFetchBasketCart = (data) => {
    return dispatch => {
        axios.delete(`https://62542cf389f28cf72b59663a.mockapi.io/basket/${data.id}`)
            .then(({ data }) => {
                dispatch(removeBasketCart(data))
            })
            .catch(() => {
                alert('Ошибка')
            })
    }
}



// export const removeFetchBasketCart = (obj) => {
//     return dispatch => {
//         axios.delete('https://62542cf389f28cf72b59663a.mockapi.io/basket', obj)
//         .then(({data}) => {
//             dispatch(addbasketAction(data))
//         })
//         .catch(() => {
//             alert('Ошибка')
//         })
//     }
// }

