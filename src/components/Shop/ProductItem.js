import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../Store';
import { useDispatch } from 'react-redux';

export default function ProductItem(props){ 

  const { title, price, description, id } = props;
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItemToCart({
      id: id,
      title: title,
      price: price
    }))
    console.log(`item ${ title} added`)
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick = { addToCart }>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};


