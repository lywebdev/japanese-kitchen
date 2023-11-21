import styles from './PromoText.module.css';

const PromoText = () => {
    return <section className={styles['promo-text']}>
        <h2>Online Sushi Restaurant Japanese Kitchen</h2>
        <p>
            Japanese cuisine is an online sushi bar where your favorite sushi and sashimi, rolls and other dishes of
            national Japanese cuisine are made by a team of professional chefs.
        </p>
        <p>
            Fast work and high-quality products, as well as the most authentic ingredients give a good taste to dishes,
            give pleasure from a meal
        </p>
    </section>
}

export default PromoText;