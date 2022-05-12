import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchBasketCart } from './asyncActions/basket';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Products from './Components/Products/Products';
import Basket from './Components/Basket/Basket';


const App = () => {

  // сделать отправку продуктов из корзины на сервер 
  // реализовать подсчёт добавленных товаров в корзине

  const [activeBasket, setActiveBasket] = React.useState(false);
  const dispatch = useDispatch();
  React.useState(() => {
    dispatch(fetchBasketCart())
  }, [])


  const visibleBasket = () => {
    setActiveBasket(!activeBasket)
  }




  return (
    <>
      <Header visibleBasket={visibleBasket} />
      <Layout>
        <Products />
      </Layout>

      {
        activeBasket && <Basket visibleBasket={visibleBasket} />
      }
    </>
  );
}

export default App;
