import styles from "./App.module.css";
import DessertCard from "./components/DessertCard";

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
        {allDesserts.map((dessert, id) => (
          <DessertCard dessert={dessert} key={id} />
        ))}
      </div>
    </div>
  );
}
