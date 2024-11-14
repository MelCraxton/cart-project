import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../Store';

export default function CartItem({ item }) {
  const { title, quantity, total, price, id } = item;
  
  const dispatch = useDispatch()

  const addItem = () =>{
    dispatch(cartActions.addItemToCart({ id,title,price }))
  }

  const deleteItem = () =>{
    dispatch(cartActions.removeItemFromCart(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprices}>(${price.toFixed(2)}/item)</span>
        </div>

      </header>

      <div className={classes.details}>
        
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        
        <div className={classes.actions}>
          <button onClick={ deleteItem }>-</button>
          <button onClick={ addItem }>+</button>
        </div>
      
      </div>
    </li>
  );
};


