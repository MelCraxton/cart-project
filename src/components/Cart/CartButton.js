import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../Store';


export default function CartButton () {
  const dispatch = useDispatch()

  function toggleCart(){
    dispatch(uiActions.toggle())
  }

  const cartQuantity = useSelector(state => state.cart.totalQuantity)
  
  return (
    <button onClick= { toggleCart } className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{ cartQuantity }</span>
    </button>
  );
};


