import { FaCartPlus } from "react-icons/fa";
import styles from "../App.module.css";

export default function DessertCard({ dessert }) {
  return (
    <div className={styles.item}>
      <div className={styles.image_container}>
        <img src={dessert.image} alt={dessert.name} />
      </div>
      <button className={styles.add_to_cart}>
        <FaCartPlus className={styles.cartIcon} />
        <span>Add to cart</span>
      </button>

      <div className={styles.aboutDesserts}>
        <p>{dessert.label}</p>
        <h3>{dessert.name}</h3>
        <h5>${dessert.price.toFixed(2)}</h5>
      </div>
    </div>
  );
}
