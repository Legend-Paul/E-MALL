import { Link } from "react-router-dom";
import styles from "./checkout.module.css";
import Input from "../../components/input";
import { calculateTotalPrice } from "../../utils/addProductToLocalStorage";
export default function CheckOut() {
    const products = JSON.parse(localStorage.getItem("cart-products"));
    const users = JSON.parse(localStorage.getItem("users"));
    let signedUser = null;
    if (users) signedUser = users.find((user) => user.isSignedIn);
    const productQuantity = products?.reduce(
        (acc, curr) => acc + curr?.value?.amount,
        0
    );

    return (
        <section>
            <h2>Hello, {signedUser ? signedUser.details.username : ""}</h2>
            {products && (
                <div className={styles["order-content"]}>
                    <div className={styles["products-container"]}>
                        {[...products].map((data) => {
                            return (
                                <div
                                    className={styles["product"]}
                                    key={data.id}
                                >
                                    <div className={styles["heading"]}>
                                        <div className={styles["pickup"]}>
                                            <p>PCKUP STATION</p>
                                            <p>{data?.value?.location}</p>
                                        </div>
                                        <Link to={`/${data.id}`}>Change</Link>
                                    </div>
                                    <div className={styles["product-content"]}>
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
                                            <p>Ksh {data.value.price}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles["custormer-options"]}>
                        <div className="personal-details">
                            <p className="name">
                                HELLO{" "}
                                {signedUser?.details?.username.toUpperCase()}
                            </p>
                            <p className="email">Email | {signedUser?.email}</p>
                        </div>
                        <div className="order-details">
                            <h3>Order({productQuantity})</h3>
                            <div className="delivery-option">
                                <h4>Delivery option @ product</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="delivery-option"
                                        defaultChecked
                                    />
                                    Pickup Station(Ksh 90)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="delivery-option"
                                    />
                                    Door to door(Ksh 200)
                                </label>
                            </div>
                            <div className="total-amount">
                                <div className="amount">
                                    <p>Amount </p>
                                    <p>{calculateTotalPrice(products)}</p>
                                </div>
                            </div>
                            <div className="deliverly-fee">
                                <div className="amount">
                                    <p>Delivery </p>
                                    <p>{200 * products.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
