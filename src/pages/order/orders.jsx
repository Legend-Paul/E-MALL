import { useLoaderData, Link, useNavigate, Navigate } from "react-router-dom";
import styles from "./order.module.css";
import generateDate from "../../utils/generteDate";
import Button from "../../components/button";

export async function Loader() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    return data;
}

export default function Orders() {
    const data = useLoaderData();
    const navigate = useNavigate();
    const limit = Math.floor((Math.random() * data.length) / 1.25);
    const articleData = data.filter((data, i) => i < limit + 5 && i > limit);
    const products = JSON.parse(localStorage.getItem("orders-products"));
    const todayDate = new Date(generateDate());
    const users = JSON.parse(localStorage.getItem("users"));
    let signedUser = null;
    const DELIVERPRICE = { door: 200, station: 90 };
    if (users) signedUser = users.find((user) => user.isSignedIn);

    function handleNavigateToHomePage() {
        navigate("/");
    }

    return (
        <section>
            {signedUser ? (
                products ? (
                    <div className={styles["products-container"]}>
                        <h2>VIEW YOUR ORDERS</h2>
                        {products.map((product) => {
                            return (
                                <div
                                    className={styles["product"]}
                                    key={product.id}
                                >
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
                                                        todayDate >=
                                                        new Date(
                                                            product.value.deliveryDate
                                                        )
                                                            ? "delivered"
                                                            : "pedding"
                                                    }`
                                                ]
                                            }
                                        >
                                            {todayDate >=
                                            product.value.deliveryDate
                                                ? "DELIVERED"
                                                : "PEDDING"}
                                        </p>
                                        <p>
                                            Delivery:{" "}
                                            {product.value.deliveryDate}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className={styles["no-product-container"]}>
                        <em>You have not yet made any order yet!</em>
                        <Button
                            label="Go back to shopping"
                            color="secondary"
                            handleClick={handleNavigateToHomePage}
                        />
                    </div>
                )
            ) : (
                <Navigate to="/" />
            )}
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
