import styles from "./App.module.css";
import { FaCartPlus } from "react-icons/fa";

const allDesserts = [
  {
    image: "/image-waffle-mobile.jpg",
    label: "Waffle",
    name: "Waffle with Berries",
    price: 6.5,
  },
  {
    image: "/image-creme-brulee-mobile.jpg",
    label: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: 7,
  },
  {
    image: "/image-macaron-mobile.jpg",
    label: "Macaron",
    name: "Macaron Mix of Five",
    price: 8,
  },
  {
    image: "/image-tiramisu-mobile.jpg",
    label: "Tiramisu",
    name: "Classic Tiramisu",
    price: 5.5,
  },
  {
    image: "/image-baklava-mobile.jpg",
    label: "Baklava",
    name: "Pistachio Baklava",
    price: 4,
  },
  {
    image: "/image-meringue-mobile.jpg",
    label: "Lemon Meringue Pie",
    name: "Waffle with Berries",
    price: 5,
  },
  {
    image: "/image-cake-mobile.jpg",
    label: "Cake",
    name: "Red Velvet Cake",
    price: 4.5,
  },
  {
    image: "/image-brownie-mobile.jpg",
    label: "Brownie",
    name: "Salted Caramel Brownie",
    price: 4.5,
  },
  {
    image: "/image-panna-cotta-mobile.jpg",
    label: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 6.5,
  },
];

export default function App() {
  return (
    <div className={styles.container}>
      <h1>Desserts</h1>
      <div className={styles.inner_container}>
        {allDesserts.map((dessert) => (
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
        ))}
      </div>
    </div>
  );
}
