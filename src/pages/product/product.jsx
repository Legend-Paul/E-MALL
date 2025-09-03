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
    const data = dataArray[id - 1];
    const similarData = dataArray.filter(
        (d) => d.category === data.category && d.id !== data.id
    );

    return (
        <section className={styles["product-section"]}>
            <div className={styles["product-summary"]}>
                <div className={styles["product-info"]}>
                    <div className={styles["top"]}>
                        <div className={styles["image-container"]}>
                            <img src={data.image} alt={data.title} />
                        </div>
                        <div className={styles["small-description"]}>
                            <div>
                                <p className={styles["title"]}>{data.title}</p>
                                <Link to={"#"}>Similar {data.category}</Link>
                                <h3 className={styles["price"]}>
                                    {data.price}
                                </h3>
                                <div className={styles["product-quantity"]}>
                                    <span className={styles["subtract"]}>
                                        <i className="bi bi-dash-square-fill"></i>
                                    </span>
                                    <span className={styles["amount"]}>0</span>
                                    <span className={styles["add"]}>
                                        <i className="bi bi-plus-square-fill"></i>
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
                </div>
                <article className={styles["delivery-details"]}>
                    <div className={styles["delivery-location-selection"]}>
                        <h4>E-MALL PRODUCT DLIVERY</h4>
                        <p>We provide delivery in the location below</p>
                        <select name="delivery-options" id="">
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
                            <div key={data.id} className={styles["product"]}>
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
