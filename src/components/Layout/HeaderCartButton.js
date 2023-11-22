import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";
import {useContext} from "react";

const HeaderCartButton = (props) => {
    const cartContext  = useContext(CartContext);
    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0);

    return <button className={styles.button} onClick={props.onClick} >
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Cart</span>
        <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
}

export default HeaderCartButton;