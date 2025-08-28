import indexStyles from "../../index.module.css";
import styles from "./home.module.css";
import Button from "../../components/button";
import Input from "../../components/input";
import { useState } from "react";

export default function Home() {
    const [isOpen, setIsOpen] = useState(true);
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
                        isOpen ? styles["open-archodion"] : ""
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <h3>More Options </h3>
                    {isOpen ? (
                        <i className="bi bi-caret-down-fill"></i>
                    ) : (
                        <i className="bi bi-caret-right-fill"></i>
                    )}
                </div>

                {
                    <article
                        className={`${styles["user-options"]} ${
                            isOpen
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
        </section>
    );
}
