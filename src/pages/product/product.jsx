import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button";
import styles from "./product.module.css";
import hanldeAddProductToCart from "../../utils/addProductToLocalStorage";
import { useState } from "react";

export async function Loader() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    return data;
}
function CheckPrevProductAmount(id, products) {
    if (!products) return null;
    let product = products.find((data) => data.id == id);
    return product ? product : null;
}

export default function Product() {
    const dataArray = useLoaderData();
    const { id } = useParams();
    const products = JSON.parse(localStorage.getItem("cart-products"));
    const data = dataArray[id - 1];
    const navigate = useNavigate();
    // localStorage.removeItem("cart-products");
    const prevProduct = CheckPrevProductAmount(id, products);
    const [productAmount, setProductAmount] = useState(
        prevProduct?.value?.amount || 0
    );
    const [location, setLocation] = useState(
        prevProduct?.location || "Nairobi"
    );
    const similarData = dataArray.filter(
        (d) => d.category === data.category && d.id !== data.id
    );

    function handleAddAmount() {
        setProductAmount((amount) => amount + 1);
    }
    function handleSubtractAmount() {
        setProductAmount((amount) => amount - 1);
    }
    function handleClearAmount() {
        setProductAmount(0);
    }

    function handleAddToCart() {
        if (productAmount === 0) setProductAmount(1);
        hanldeAddProductToCart(data, productAmount, location);
    }

    function handeLocationChange(e) {
        setLocation(e.target.value);
    }
    function handleNavigateToHomePage() {
        navigate(-1);
    }

    return (
        <section className={styles["product-section"]}>
            <button
                onClick={handleNavigateToHomePage}
                className={styles["move-back-btn"]}
            >
                <i className="bi bi-arrow-left"></i> Move back
            </button>
            <div className={styles["product-summary"]}>
                <div className={styles["product-info"]}>
                    <div className={styles["top"]}>
                        <div className={styles["image-container"]}>
                            <img src={data.image} alt={data.title} />
                        </div>
                        <div className={styles["small-description"]}>
                            <div>
                                <p className={styles["title"]}>{data.title}</p>
                                <Link
                                    to={`/?filter-by=${data.category.toLowerCase()}`}
                                >
                                    Similar {data.category}
                                </Link>
                                <h3 className={styles["price"]}>
                                    Ksh {data.price}
                                </h3>
                                <div className={styles["product-quantity"]}>
                                    <span
                                        className={styles["subtract"]}
                                        onClick={handleSubtractAmount}
                                    >
                                        <i className="bi bi-dash-square-fill"></i>
                                    </span>
                                    <span className={styles["amount"]}>
                                        {productAmount}
                                    </span>
                                    <span
                                        className={styles["add"]}
                                        onClick={handleAddAmount}
                                    >
                                        <i className="bi bi-plus-square-fill"></i>
                                    </span>
                                </div>
                            </div>
                            <div className={styles["c-t-a"]}>
                                <Button
                                    label="Add to cart"
                                    color="secondary"
                                    handleClick={handleAddToCart}
                                />
                            </div>
                        </div>
                    </div>
                    <article className={styles["bottom"]}>
                        <div className={styles["total-description"]}>
                            <h4>Product description</h4>
                            <p>{data.description}</p>
                        </div>
                    </article>
                </div>
                <article className={styles["delivery-details"]}>
                    <div className={styles["delivery-location-selection"]}>
                        <h4>E-MALL PRODUCT DLIVERY</h4>
                        <p>We provide delivery in the location below</p>
                        <select
                            name="delivery-options"
                            id=""
                            value={location}
                            onChange={handeLocationChange}
                        >
                            <option value="Nairobi">Nairobi</option>
                            <option value="Nyeri">Nyeri</option>
                            <option value="Mombasa">Mombasa</option>
                            <option value="Thika">Thika</option>
                            <option value="Nakuru">Nakuru</option>
                            <option value="Kisumu">Kisumu</option>
                            <option value="Eldoret">Eldoret</option>
                        </select>
                    </div>
                    <div className={styles["delivery-option"]}>
                        <div className={styles["pick-up"]}>
                            <h5>
                                {" "}
                                <i className="bi bi-handbag"></i> Pickup Station
                            </h5>
                            <p>
                                Delivery Fees <span>KSh 90 Ready</span> for
                                pickup after 4 days if you place your order
                                within the next 6hrs 51mins
                            </p>
                        </div>
                        <div className={styles["pick-up"]}>
                            <h5>
                                <i className="bi bi-truck"></i> Door to Door
                                Delivery
                            </h5>
                            <p>
                                Delivery Fees <span>KSh 200</span> Ready for
                                delivery after 4 days if you place your order
                                within the next 6hrs 51mins
                            </p>
                        </div>
                    </div>
                </article>
            </div>

            <div className={styles["similar-products-container"]}>
                <h5>Similar Products</h5>
                <div className={styles["similar-products"]}>
                    {similarData.map((data) => {
                        return (
                            <div
                                key={data.id}
                                className={styles["product"]}
                                onClick={handleClearAmount}
                            >
                                <div
                                    className={
                                        styles["product-image-container"]
                                    }
                                >
                                    <Link to={`/${data.id}`}>
                                        <img
                                            src={data.image}
                                            alt={data.title}
                                        />
                                    </Link>
                                </div>
                                <div className={styles["description"]}>
                                    <p className={styles["title"]}>
                                        {data.title}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
