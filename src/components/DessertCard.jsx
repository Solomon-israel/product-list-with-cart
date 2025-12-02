import { FaCartPlus } from "react-icons/fa";
import styles from "../App.module.css";
import { useState } from "react";

export default function DessertCard({
  dessert,
  handleAddToCart,
  handleAddCount,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.image_container}>
          <img src={dessert.image} alt={dessert.name} />
        </div>
        {dessert.selected ? (
          <div className={styles.add_to_cart}>
            <div className={styles.counter}>
              <button onClick={handleAddToCart}>+</button>
              <span>{dessert.selected}</span>
              <button>-</button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => handleAddToCart(dessert.id)}
            className={styles.add_to_cart}
          >
            <FaCartPlus className={styles.cartIcon} />
            <span>Add to cart</span>
          </button>
        )}

        <div className={styles.aboutDesserts}>
          <p>{dessert.label}</p>
          <h3>{dessert.name}</h3>
          <h5>${dessert.price.toFixed(2)}</h5>
        </div>
      </div>
      {/* Selected item */}
    </div>
  );
}
