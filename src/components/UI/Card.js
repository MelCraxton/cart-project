import classes from './Card.module.css';

export default function Card({ className, children }) {
  return (
    <section
      className={`${classes.card} ${className ? className : ''}`}
    >
      {children}
    </section>
  );
};


