import styles from "./App.module.css";
import { FaCartPlus } from "react-icons/fa";

export default function App() {
  return (
    <div className={styles.container}>
      <h1>Desserts</h1>
      {/* Waffle */}
      <div className={styles.item}>
        <div className={styles.image}>
          <img src="/image-waffle-mobile.jpg" alt="food" />
        </div>
        <button className={styles.orderBtn}>
          <FaCartPlus className={styles.cartIcon} />
          Add to cart
        </button>

        <div className={styles.aboutDesserts}>
          <p>Waffle</p>
          <h3>Waffle with Berries</h3>
          <h5>$6.50</h5>
        </div>
      </div>

      {/* creme-Brulee */}
      <div className={styles.item}>
        <div className={styles.image}>
          <img src="/image-creme-brulee-mobile.jpg" alt="food" />
        </div>
        <button className={styles.orderBtn}>
          <FaCartPlus className={styles.cartIcon} />
          Add to cart
        </button>

        <div className={styles.aboutDesserts}>
          <p>Crème Brûlée</p>
          <h3>Vanilla Bean Crème Brûlée</h3>
          <h5>$7.00</h5>
        </div>
      </div>

      {/* Macaron */}
      <div className={styles.item}>
        <div className={styles.image}>
          <img src="/image-macaron-mobile.jpg" alt="food" />
        </div>
        <button className={styles.orderBtn}>
          <FaCartPlus className={styles.cartIcon} />
          Add to cart
        </button>

        <div className={styles.aboutDesserts}>
          <p>Macaron</p>
          <h3>Macaron Mix of Five</h3>
          <h5>$8.00</h5>
        </div>
      </div>

      {/* Tiramisu */}
      <div className={styles.item}>
        <div className={styles.image}>
          <img src="/image-tiramisu-mobile.jpg" alt="food" />
        </div>
        <button className={styles.orderBtn}>
          <FaCartPlus className={styles.cartIcon} />
          Add to cart
        </button>

        <div className={styles.aboutDesserts}>
          <p>Tiramisu</p>
          <h3>Classic Tiramisu</h3>
          <h5>$5.50</h5>
        </div>
      </div>

      {/* Baklava */}
      <div className={styles.item}>
        <div className={styles.image}>
          <img src="/image-baklava-mobile.jpg" alt="food" />
        </div>
        <button className={styles.orderBtn}>
          <FaCartPlus className={styles.cartIcon} />
          Add to cart
        </button>

        <div className={styles.aboutDesserts}>
          <p>Baklava</p>
          <h3>Pistachio Baklava</h3>
          <h5>$4.00</h5>
        </div>
      </div>

      {/* Meringue Pie */}
      <div className={styles.item}>
        <div className={styles.image}>
          <img src="/image-meringue-mobile.jpg" alt="food" />
        </div>
        <button className={styles.orderBtn}>
          <FaCartPlus className={styles.cartIcon} />
          Add to cart
        </button>

        <div className={styles.aboutDesserts}>
          <p>Pie</p>
          <h3>Lemon Meringue Pie</h3>
          <h5>$5.00</h5>
        </div>
      </div>

      {/* Cake */}
      <div className={styles.item}>
        <div className={styles.image}>
          <img src="/image-cake-mobile.jpg" alt="food" />
        </div>
        <button className={styles.orderBtn}>
          <FaCartPlus className={styles.cartIcon} />
          Add to cart
        </button>

        <div className={styles.aboutDesserts}>
          <p>Cake</p>
          <h3>Red Velvet Cake</h3>
          <h5>$ 4.50</h5>
        </div>
      </div>

      {/* Brownie */}
      <div className={styles.item}>
        <div className={styles.image}>
          <img src="/image-brownie-mobile.jpg" alt="food" />
        </div>
        <button className={styles.orderBtn}>
          <FaCartPlus className={styles.cartIcon} />
          Add to cart
        </button>

        <div className={styles.aboutDesserts}>
          <p>Brownie</p>
          <h3>Salted Caramel Brownie</h3>
          <h5>$ 4.50</h5>
        </div>
      </div>

      {/* Panna-cotta */}
      <div className={styles.item}>
        <div className={styles.image}>
          <img src="/image-panna-cotta-mobile.jpg" alt="food" />
        </div>
        <button className={styles.orderBtn}>
          <FaCartPlus className={styles.cartIcon} />
          Add to cart
        </button>

        <div className={styles.aboutDesserts}>
          <p> Panna Cotta</p>
          <h3> Vanilla Panna Cotta</h3>
          <h5>$ 6.50</h5>
        </div>
      </div>
    </div>
  );
}
