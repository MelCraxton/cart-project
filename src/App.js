import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const showCart = useSelector(state => state.ui.cartVisible)
  const cart = useSelector(state => state.cart.items)
  
  const url = 'https://my-cart-76adc-default-rtdb.europe-west1.firebasedatabase.app/cart.json'

  useEffect(() => {
    const sendCardData = async() => {
      await fetch( url, {
        method: 'PUT',
        body: JSON.stringify(cart),
        headers: { 'Content-Type': 'application/json'}   
      })
    }
    sendCardData()
    }, [ cart]) 
    

  return (
    <>
    <Layout>
      {showCart && < Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
