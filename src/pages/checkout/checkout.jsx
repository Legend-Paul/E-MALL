import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./checkout.module.css";
import { calculateTotalPrice } from "../../utils/addProductToLocalStorage";
import Button from "../../components/button";
import { useState } from "react";

export default function CheckOut() {
    const [deliverOption, setDeliveryOPtion] = useState("station");
    const navigate = useNavigate();
    const products = JSON.parse(localStorage.getItem("cart-products"));
    const users = JSON.parse(localStorage.getItem("users"));
    let signedUser = null;
    const DELIVERPRICE = { door: 200, station: 90 };
    if (users) signedUser = users.find((user) => user.isSignedIn);
    const productQuantity = products?.reduce(
        (acc, curr) => acc + curr?.value?.amount,
        0
    );
    const totalPrice = calculateTotalPrice(products);

    function handleChangeDeliveryOption(option) {
        setDeliveryOPtion(option);
    }
    function calculateTotalOrderAmount() {
        const total =
            DELIVERPRICE[deliverOption] * productQuantity + totalPrice;
        return Number(total.toFixed(2));
    }
    function handleNavigateToOrdersPage() {
        const ordersProduct =
            JSON.parse(localStorage.getItem("orders-products")) || [];
        localStorage.setItem(
            "orders-products",
            JSON.stringify([...ordersProduct, ...products])
        );
        navigate("/orders");
        localStorage.removeItem("cart-products");
    }
    return (
        <section>
            {signedUser ? (
                products ? (
                    <div className={styles["order-content"]}>
                        <div className={styles["products-container"]}>
                            {[...products].map((data) => {
                                return (
                                    <div
                                        className={styles["product"]}
                                        key={data.id}
                                    >
                                        <p className={styles["product-amount"]}>
                                            {data.value.amount}
                                        </p>
                                        <div className={styles["heading"]}>
                                            <div className={styles["pickup"]}>
                                                <p>PCKUP STATION</p>
                                                <p>{data?.value?.location}</p>
                                            </div>
                                            <Link to={`/${data.id}`}>
                                                Change
                                            </Link>
                                        </div>
                                        <div
                                            className={
                                                styles["product-content"]
                                            }
                                        >
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
                                            <div
                                                className={
                                                    styles["description"]
                                                }
                                            >
                                                <h4>{data.value.title}</h4>
                                                <p>Ksh {data.value.price}</p>
                                                <p>
                                                    Delivery{": "}
                                                    {data.value.deliveryDate}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles["custormer-options"]}>
                            <div className={styles["personal-details"]}>
                                <p className={styles["name"]}>
                                    HELLO{" "}
                                    {signedUser?.details?.username.toUpperCase()}
                                </p>

                                <p className={styles["email"]}>
                                    Email | {signedUser?.email}
                                </p>
                            </div>
                            <div className={styles["order-details"]}>
                                <h3>Order({productQuantity})</h3>
                                <div className={styles["delivery-option"]}>
                                    <h4>Delivery option @ product</h4>
                                    <label>
                                        <input
                                            type="radio"
                                            name="delivery-option"
                                            defaultChecked
                                            onChange={() =>
                                                handleChangeDeliveryOption(
                                                    "station"
                                                )
                                            }
                                        />
                                        <p>
                                            Pickup Station (Ksh
                                            DELIVERPRICE.station)
                                        </p>
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="delivery-option"
                                            onChange={() =>
                                                handleChangeDeliveryOption(
                                                    "door"
                                                )
                                            }
                                        />
                                        <p>
                                            Door to door (Ksh DELIVERPRICE.door)
                                        </p>
                                    </label>
                                </div>
                                <div className={styles["total-amount"]}>
                                    <div className={styles["amount"]}>
                                        <p>Amount </p>
                                        <p>{totalPrice}</p>
                                    </div>
                                    <div className={styles["delivery-fee"]}>
                                        <p>Delivery </p>
                                        <p>{DELIVERPRICE[deliverOption]}</p>
                                    </div>
                                    <div className={styles["delivery-fee"]}>
                                        <p>Total Amount </p>
                                        <p>{calculateTotalOrderAmount()}</p>
                                    </div>
                                </div>
                                <div className={styles["btn-cont"]}>
                                    <Button
                                        label="Order Now"
                                        color="secondary"
                                        handleClick={handleNavigateToOrdersPage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Navigate to="/cart" />
                )
            ) : (
                <Navigate to="/account" />
            )}
        </section>
    );
}
