import styles from "./order.module.css";

export default function Orders() {
    const products = JSON.parse(localStorage.getItem("orders-products"));
    console.log(products);
    return <section></section>;
}
