import React from "react";
import sushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <React.Fragment>
        <header className={styles.header}>
            <h1>Japanese Kitchen</h1>
            <HeaderCartButton />
        </header>
        <div>
            <img src={sushiImage} alt="Japanese Kitchen" className={styles['main-image']}/>
        </div>
    </React.Fragment>;
}

export default Header;