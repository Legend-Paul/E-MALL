import indexStyles from "../../index.module.css";
import styles from "./home.module.css";
import Button from "../../components/button";
import Input from "../../components/input";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export async function Loader() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
}

export default function Home() {
    const data = useLoaderData();
    const [isFilterOptionOpen, setIsFilterOptionOpen] = useState(false);
    const [activeChip, setActiveChip] = useState({
        category: [
            { name: "All", active: true },
            { name: "TV", active: false },
            { name: "Phones", active: false },
            { name: "Laptop", active: false },
            { name: "HeadPhones", active: false },
        ],

        brand: [
            { name: "Techno", active: false },
            { name: "RedMi", active: false },
            { name: "Apple", active: false },
            { name: "Techno", active: false },
            { name: "Samsung", active: false },
        ],
    });

    function handleChipClick(filterType, index) {
        setActiveChip((prev) => ({
            ...prev,
            [filterType]: prev[filterType].map((chip, i) =>
                i == index ? { ...chip, active: !chip.active } : { ...chip }
            ),
        }));
    }
    return (
        <section className={`${indexStyles["page"]} ${styles["home-page"]}`}>
            <div className={styles["user-options-cont"]}>
                <div
                    className={`${styles["achordion"]} ${
                        isFilterOptionOpen ? styles["open-archodion"] : ""
                    }`}
                    onClick={() => setIsFilterOptionOpen(!isFilterOptionOpen)}
                >
                    <h3>More Options </h3>
                    {isFilterOptionOpen ? (
                        <i className="bi bi-caret-down-fill"></i>
                    ) : (
                        <i className="bi bi-caret-right-fill"></i>
                    )}
                </div>

                {
                    <article
                        className={`${styles["user-options"]} ${
                            isFilterOptionOpen
                                ? styles["open-options"]
                                : styles["hide-options"]
                        }`}
                    >
                        <div className={styles["filter-options"]}>
                            <h4>Filter By</h4>

                            <div
                                className={`${styles["filter-category"]} ${styles["option"]}`}
                            >
                                <h4>Category</h4>
                                <div className={styles["filter-chips"]}>
                                    {activeChip.category.map((category, i) => (
                                        <button
                                            key={i}
                                            className={`${styles["chip"]} ${
                                                styles[
                                                    category.active
                                                        ? "active"
                                                        : ""
                                                ]
                                            }`}
                                            onClick={() =>
                                                handleChipClick("category", i)
                                            }
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div
                                className={`${styles["filter-brand"]} ${styles["option"]}`}
                            >
                                <h4>Brand</h4>
                                <div className={styles["filter-chips"]}>
                                    {activeChip.brand.map((brand, i) => (
                                        <button
                                            key={i}
                                            className={`${styles["chip"]} ${
                                                brand.active
                                                    ? styles["active"]
                                                    : styles[""]
                                            }`}
                                            onClick={() =>
                                                handleChipClick("brand", i)
                                            }
                                        >
                                            {brand.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div
                                className={`${styles["filter-price"]} ${styles["option"]}`}
                            >
                                <h4>Price</h4>
                                <div className={styles["price-input"]}>
                                    <Input
                                        labelName={"Min"}
                                        placehoder={"Min Price"}
                                        type={"number"}
                                    />
                                    <Input
                                        labelName={"Max"}
                                        placehoder={"Max Price"}
                                        type={"number"}
                                    />
                                </div>
                            </div>
                        </div>
                    </article>
                }
            </div>
            <main className={styles["main"]}>
                <div className={`${styles["product-container"]}`}>
                    {data.map((data) => {
                        return (
                            <div
                                key={data.id}
                                className={`${styles["product"]} ${
                                    !isFilterOptionOpen
                                        ? styles["change-z-index"]
                                        : ""
                                }
                                        
                                    `}
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
                                    <h3 className={styles["price"]}>
                                        Ksh. {data.price}
                                    </h3>
                                </div>
                                <Button label="Add to cart" color="secondary" />
                            </div>
                        );
                    })}
                </div>
            </main>
        </section>
    );
}
