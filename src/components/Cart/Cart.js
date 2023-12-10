import styles from './Cart.module.css';
import Modal from "../UI/Modal";
import { useContext } from 'react';
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;
    
    const removeCartItemHandler = (id) => {

    }

    const addCartItemHandler = (item) => {

    }

    const cartItems = <ul className={styles['cart-items']}>{[
        {id: 'm1', name: 'Sushi', amount: 2, price: 11}
    ].map((item) => (
            <CartItem
                key={props.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAdd={addCartItemHandler.bind(null, item)}
                onRemove={removeCartItemHandler.bind(null, item.id)}
            />
        ))}
    </ul>;

    return <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Total amount:</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onHideCart}>Закрыть</button>
            {hasItems && <button className={styles.button}>Заказать</button>}
        </div>
    </Modal>
}

export default Cart;