import { Component } from "react";
import styles from "./shopItemClass.module.css";

export default class ShopItemClass extends Component {
  render() {
    const { brand, title, description, descriptionFull, currency, price } =
      this.props.item;
    return (
      <div className={styles.main_content}>
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className={styles.description}>{descriptionFull}</div>
        <div className={`${styles.highlight_window} ${styles.mobile}`}>
          <div className={styles.highlight_overlay}></div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.purchase_info}>
          <div className={styles.price}>
            {currency}
            {price}
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}
