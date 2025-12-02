import { FaShoppingBag } from "react-icons/fa";
import styles from "./App.module.css";
import DessertCard from "./components/DessertCard";
import { useState } from "react";

const allDesserts = [
  {
    id: 1,
    image: "/image-waffle-mobile.jpg",
    label: "Waffle",
    name: "Waffle with Berries",
    price: 6.5,
  },
  {
    id: 2,
    image: "/image-creme-brulee-mobile.jpg",
    label: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: 7,
  },
  {
    id: 3,
    image: "/image-macaron-mobile.jpg",
    label: "Macaron",
    name: "Macaron Mix of Five",
    price: 8,
  },
  {
    id: 4,
    image: "/image-tiramisu-mobile.jpg",
    label: "Tiramisu",
    name: "Classic Tiramisu",
    price: 5.5,
  },
  {
    id: 5,
    image: "/image-baklava-mobile.jpg",
    label: "Baklava",
    name: "Pistachio Baklava",
    price: 4,
  },
  {
    id: 6,
    image: "/image-meringue-mobile.jpg",
    label: "Lemon Meringue Pie",
    name: "Waffle with Berries",
    price: 5,
  },
  {
    id: 7,
    image: "/image-cake-mobile.jpg",
    label: "Cake",
    name: "Red Velvet Cake",
    price: 4.5,
  },
  {
    id: 8,
    image: "/image-brownie-mobile.jpg",
    label: "Brownie",
    name: "Salted Caramel Brownie",
    price: 4.5,
  },
  {
    id: 9,
    image: "/image-panna-cotta-mobile.jpg",
    label: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 6.5,
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [allProducts, setAllProducts] = useState(allDesserts);
  const [count, setCount] = useState(1);

  function handleAddToCart(id) {
    const updateProducts = allProducts.map((p) => {
      if (p.id === id) {
        return { ...p, selected: true };
      }

      return p;
    });

    setAllProducts(updateProducts);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Desserts</h1>
        <div className={styles.inner_container}>
          {allProducts.map((dessert, id) => (
            <DessertCard
              dessert={dessert}
              key={id}
              handleAddToCart={handleAddToCart}
              handleAddCount={handleAddToCart}
            />
          ))}
        </div>
      </div>

      {/* SELECTED ITEMS */}
      {/* if(cart){} */}

      <div className={styles.selected_item}>
        <h1>Your cart (0)</h1>
        <div className={styles.div}>
          <div className={styles.emptyCartImageContainer}>
            <img src="/illustration-empty-cart.svg" alt="empty cart" />
          </div>
          <p>Your added items will appear here</p>
        </div>
      </div>

      {/* SELECTED ITEMS */}
      <div className={styles.selectedItemsParentDiv}>
        <div className={styles.selectedItems}>
          <h2>Your Cart (7)</h2>
          <h3>Classic Tiramisu</h3>
          <div>
            <p>1x</p>
            <span>@ 5.50</span>
          </div>
        </div>
      </div>

      {/* ordered items */}
      {/* <div className={styles.confirmedSectionContainer}>
        {cart.map((c) => (
          <div className={styles.confirmedSection}>
            <div className={styles.confirmedImage}>
              <img src="icon-order-confirmed.svg" alt="confirmed" />
            </div>
            <h2>Order confirmed</h2>
            <p>We hope you enjoy your food!</p>

            <div className={styles.listOfFoodConfirmed}>
              <div className={styles.orderedFood}>
                <img src={c.image} alt={c.label} />
              </div>
              <div className={styles.confirmedText}>
                <h3>{c.label}</h3>
                <div className={styles.confirmedTextChild}>
                  <p>1x</p>
                  <p>$ {c.price} </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
