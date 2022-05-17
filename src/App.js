import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useDispatch } from 'react-redux';

import { fetchBasketCart } from './asyncActions/basket';
import { fetchFavoriteCarts } from './asyncActions/favorite';
import { fetchCarts } from './asyncActions/carts';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Products from './Components/Products/Products';
import Basket from './Components/Basket/Basket';
import Home from './Pages/Home';
import FavoritePage from './Pages/FavoritePage';


const App = () => {

  // сделать отправку продуктов из корзины на сервер 
  // реализовать подсчёт добавленных товаров в корзине

  const [activeBasket, setActiveBasket] = React.useState(false);
  const dispatch = useDispatch();


  React.useState(() => {
    dispatch(fetchBasketCart())
  }, [])

  React.useEffect(() => {
    dispatch(fetchFavoriteCarts())
  }, [])

  React.useEffect(() => {
    dispatch(fetchCarts());
  }, []);


  const visibleBasket = () => {
    setActiveBasket(!activeBasket)
  }




  return (
    <>
      <Router>
        <Header visibleBasket={visibleBasket} />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/favorite' element={<FavoritePage />} />
          </Routes>
        </Layout>

        {
          activeBasket && <Basket visibleBasket={visibleBasket} />
        }
      </Router>
    </>
  );
}

export default App;
