import { useLoaderData, Link } from "react-router-dom";
import styles from "./order.module.css";
import generateDate from "../../utils/generteDate";

export async function Loader() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    return data;
}

export default function Orders() {
    const data = useLoaderData();
    const limit = Math.floor((Math.random() * data.length) / 1.25);
    const articleData = data.filter((data, i) => i < limit + 5 && i > limit);
    const products = JSON.parse(localStorage.getItem("orders-products"));
    const todayDate = new Date(generateDate());

    // localStorage.removeItem("orders-products");
    return (
        <section>
            <div className={styles["products-container"]}>
                {products.map((product) => {
                    return (
                        <div className={styles["product"]} key={product.id}>
                            <div className={styles["image-container"]}>
                                <img
                                    src={product.value.image}
                                    alt={product.value.title}
                                />
                            </div>
                            <div className={styles["description"]}>
                                <h4>{product.value.title}</h4>
                                <p>Id {product.id}</p>
                                <p
                                    className={
                                        styles[
                                            `${
                                                todayDate <=
                                                new Date(
                                                    product.value.deliveryDate
                                                )
                                                    ? "delivered"
                                                    : "pedding"
                                            }`
                                        ]
                                    }
                                >
                                    {todayDate <= product.value.deliveryDate
                                        ? "DELIVERED"
                                        : "PEDDING"}
                                </p>
                                <p>Delivery: {product.value.deliveryDate}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <article>
                <h4>Product you may like</h4>
                <div className={styles["images"]}>
                    {articleData.map((data) => {
                        return (
                            <div
                                key={data.id}
                                className={styles["images-container"]}
                            >
                                <Link to={`/${data.id}`}>
                                    <img src={data.image} alt={data.title} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </article>
        </section>
    );
}
