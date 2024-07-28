import styles from "./shopItemFunc.module.css";

const ShopItemFunc = ({ item }) => {
  return (
    <div className={styles.main_content}>
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className={styles.description}>{item.descriptionFull}</div>
      <div className={`${styles.highlight_window} ${styles.mobile}`}>
        <div className={styles.highlight_overlay}></div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.purchase_info}>
        <div className={styles.price}>
          {item.currency}
          {item.price}
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ShopItemFunc;
