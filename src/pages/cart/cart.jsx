import {
    useLoaderData,
    useNavigate,
    useLocation,
    Link,
} from "react-router-dom";
import Button from "../../components/button";
import styles from "./cart.module.css";
import { handleDeleteProductFromCart } from "../../utils/addProductToLocalStorage";
import { useState } from "react";
import hanldeAddProductToCart from "../../utils/addProductToLocalStorage";
import { calculateTotalPrice } from "../../utils/addProductToLocalStorage";

export async function Loader() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    return data;
}

export default function Cart() {
    const data = useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();
    const [click, setclick] = useState(false);
    const homeSearchParams = location.state?.searchParams || "";
    const limit = Math.floor((Math.random() * data.length) / 1.25);
    const articleData = data.filter((data, i) => i < limit + 5 && i > limit);
    const products = JSON.parse(localStorage.getItem("cart-products"));
    const [totalAmount, setTotalAmount] = useState(
        calculateTotalPrice(products)
    );

    const productQuantity = products?.reduce(
        (acc, curr) => acc + curr?.value?.amount,
        0
    );

    function handleNavigateToHomePage() {
        navigate(`/${homeSearchParams}`);
    }

    function handleDeleteProduct(data) {
        setclick(!click);
        handleDeleteProductFromCart(data);
    }

    function handleAddAmount(id, amount) {
        hanldeAddProductToCart(data[id - 1], amount + 1);
        setTotalAmount(calculateTotalPrice(products));
        setclick(!click);
    }
    function handleSubtractAmount(id, amount) {
        amount - 1 < 1
            ? handleDeleteProductFromCart(data)
            : hanldeAddProductToCart(data[id - 1], amount - 1);
        setTotalAmount(calculateTotalPrice(products));
        setclick(!click);
    }
    function handleNavigateToCheckout() {
        navigate("/cart/checkout");
    }

    return (
        <section>
            {products ? (
                <div className={styles["products-content"]}>
                    <div className={styles["products-container"]}>
                        <h1>Cart Quantity ({productQuantity})</h1>
                        {[...products].map((data) => {
                            return (
                                <div
                                    className={styles["product"]}
                                    key={data.id}
                                >
                                    <div className={styles["image-side"]}>
                                        <div
                                            className={
                                                styles["image-container"]
                                            }
                                        >
                                            <img
                                                src={data.value.image}
                                                alt={data.value.title}
                                            />
                                        </div>
                                        <div className={styles["description"]}>
                                            <h4>{data.value.title}</h4>
                                            <em>
                                                Few units left here at E-Mall
                                            </em>
                                        </div>
                                    </div>
                                    <div className={styles["price-side"]}>
                                        <h3 className={styles["price"]}>
                                            {data.value.price || 1000}
                                        </h3>
                                        <div
                                            className={
                                                styles["product-quantity"]
                                            }
                                        >
                                            <span
                                                className={styles["subtract"]}
                                                onClick={() =>
                                                    handleSubtractAmount(
                                                        data.id,
                                                        data?.value.amount
                                                    )
                                                }
                                            >
                                                <i className="bi bi-dash-square-fill"></i>
                                            </span>
                                            <span className={styles["amount"]}>
                                                {data?.value.amount}
                                            </span>
                                            <span
                                                className={styles["add"]}
                                                onClick={() =>
                                                    handleAddAmount(
                                                        data.id,
                                                        data?.value.amount
                                                    )
                                                }
                                            >
                                                <i className="bi bi-plus-square-fill"></i>
                                            </span>
                                        </div>
                                        <Button
                                            label={
                                                <>
                                                    Delete{" "}
                                                    <i className="bi bi-trash3-fill"></i>
                                                </>
                                            }
                                            color="error"
                                            handleClick={() =>
                                                handleDeleteProduct(data)
                                            }
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles["total-amount"]}>
                        <h3>Total-price</h3>
                        <p>Ksh {totalAmount}</p>
                        <Button
                            label="Check out"
                            color="secondary"
                            handleClick={handleNavigateToCheckout}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <div className={styles["no-product-container"]}>
                        <em>You have not added anything yet!</em>
                        <Button
                            label="Go back to shopping"
                            color="secondary"
                            handleClick={handleNavigateToHomePage}
                        />
                    </div>
                </div>
            )}{" "}
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
