import { Link, useLoaderData, useParams } from "react-router-dom";
import Button from "../../components/button";
import styles from "./product.module.css";

export async function Loader() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    return data;
}

export default function Product() {
    const dataArray = useLoaderData();
    const { id } = useParams();
    console.log(id);
    const data = dataArray[id - 1];
    console.log(data);
    const similarData = dataArray.filter(
        (d) => d.category === data.category && d.id !== data.id
    );

    return (
        <section className={styles["product-section"]}>
            <div className={styles["top"]}>
                <div className={styles["image-container"]}>
                    <img src={data.image} alt={data.title} />
                </div>
                <div className={styles["small-description"]}>
                    <div>
                        <p className={styles["title"]}>{data.title}</p>
                        <Link to={"#"}>Similar {data.category}</Link>
                        <h3 className={styles["price"]}>{data.price}</h3>
                        <div className={styles["product-quantity"]}>
                            <span className={styles["subtract"]}>
                                <i class="bi bi-dash-square-fill"></i>
                            </span>
                            <span className={styles["amount"]}>0</span>
                            <span className={styles["add"]}>
                                <i class="bi bi-plus-square-fill"></i>
                            </span>
                        </div>
                    </div>
                    <div className={styles["c-t-a"]}>
                        <Button label="Add to cart" color="secondary" />
                    </div>
                </div>
            </div>
            <article className={styles["bottom"]}>
                <div className={styles["total-description"]}>
                    <h4>Product description</h4>
                    <p>{data.description}</p>
                </div>
            </article>
        </section>
    );
}
