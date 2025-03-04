import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { 
    id: 'p1', 
    price: 6, 
    title: 'My first book',
  description:'My first book ever'
},
{ 
  id: 'p2', 
  price: 5, 
  title: 'My second book',
  description:'My second book ever'
},
{ 
  id: 'p3', 
  price: 7, 
  title: 'My third book',
  description:'My third book ever'
}
]

export default function Products(){
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { DUMMY_PRODUCTS.map((product) =>(
        <ProductItem
          key = { product.id }
          id = { product.id }
          title= { product.title }
          price= { product.price }
          description= { product. description }
        />
        ))}
      </ul>
    </section>
  );
};


