import { useLoaderData, Link } from "react-router-dom";
import styles from "./order.module.css";

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
    console.log(products);
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
                                <p>PEDDING</p>
                                <p>Delivery: Now</p>
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
