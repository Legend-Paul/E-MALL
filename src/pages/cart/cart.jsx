import {
    useLoaderData,
    useNavigate,
    useLocation,
    Link,
} from "react-router-dom";
import Button from "../../components/button";
import styles from "./cart.module.css";

export async function Loader() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    return data;
}

export default function Cart() {
    const data = useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();

    const homeSearchParams = location.state?.searchParams || "";
    const limit = Math.floor((Math.random() * data.length) / 1.25);
    const articleData = data.filter((data, i) => i < limit + 5 && i > limit);
    const products = JSON.parse(localStorage.getItem("cart-products"));
    const productAmont = products?.reduce(
        (acc, curr) => acc + curr?.value?.amount,
        0
    );

    function handleNavigateToHomePage() {
        navigate(`/${homeSearchParams}`);
    }

    return (
        <section>
            {products ? (
                <></>
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
                    <article>
                        <h4>Product you may like</h4>
                        <div className={styles["images"]}>
                            {articleData.map((data) => {
                                return (
                                    <Link to={`/${data.id}`}>
                                        <img
                                            src={data.image}
                                            alt={data.title}
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                    </article>
                </div>
            )}{" "}
        </section>
    );
}
