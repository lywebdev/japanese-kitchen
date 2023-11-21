import styles from './Card.module.css';

const Cart = (props) => {
    const cartItems = <ul className={styles['cart-items']}>{[
        {id: 'm1', name: 'Sushi', amount: 2, price: 11}
    ].map((item) =>
            (<li>{item.name}</li>
        ))}
    </ul>;

    return <div>
        {cartItems}
        <div className={styles.total}>
            <span>Total amount:</span>
            <span>52.50</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']}>Закрыть</button>
            <button className={styles.button}>Заказать</button>
        </div>
    </div>
}

export default Cart;