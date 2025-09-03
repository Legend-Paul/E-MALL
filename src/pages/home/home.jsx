import indexStyles from "../../index.module.css";
import styles from "./home.module.css";
import Button from "../../components/button";
import Input from "../../components/input";
import { useState } from "react";
import {
    Form,
    Link,
    // useActionData,
    useLoaderData,
    useSearchParams,
} from "react-router-dom";
import getFilterPriceRange from "../../utils/filterPrice";

export async function Loader() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
}

export default function Home() {
    // const priceFilter = useActionData
    const [searchParams, setSearchParams] = useSearchParams();
    const data = useLoaderData();
    const [isFilterOptionOpen, setIsFilterOptionOpen] = useState(false);
    const [activeChip, setActiveChip] = useState("All");
    const [filterPrice, setFilterPrice] = useState({ min: 0, max: 0 });

    const filterOptions = [
        "All",
        "Men's clothing",
        "Women's clothing",
        "Electronics",
        "Jewelery",
    ];
    console.log(filterPrice);

    const filterOption = searchParams.get("filter-category");

    let filteredData = filterOption
        ? data.filter(
              (dataObj) => dataObj.category === filterOption.toLocaleLowerCase()
          )
        : data;

    filteredData =
        filterPrice.min || filterPrice.max
            ? getFilterPriceRange(
                  filteredData,
                  filterPrice.min,
                  filterPrice.max
              )
            : filteredData;
    function handleChipClick(filterName, type, value) {
        console.log(value);
        setActiveChip(filterName);
        setSearchParams((prevParam) => {
            if (!value) {
                prevParam.delete(type);
            } else {
                prevParam.set(type, value);
            }
            return prevParam;
        });
    }
    function handledPriceChange(type, value) {
        setFilterPrice((prev) => ({ ...prev, [type]: value }));
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
                            <h3>
                                <i className="bi bi-filter"></i> Filter By
                            </h3>

                            <div
                                className={`${styles["filter-category"]} ${styles["option"]}`}
                            >
                                <h4>Options</h4>
                                <div className={styles["filter-chips"]}>
                                    {filterOptions.map((category, i) => (
                                        <button
                                            key={i}
                                            className={`${styles["chip"]} ${
                                                styles[
                                                    category === activeChip
                                                        ? "active"
                                                        : ""
                                                ]
                                            }`}
                                            onClick={() =>
                                                handleChipClick(
                                                    category,

                                                    "filter-category",
                                                    category
                                                )
                                            }
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div
                                className={`${styles["filter-price"]} ${styles["option"]}`}
                            >
                                <h4>Price</h4>
                                <div className={styles["price-input"]}>
                                    <Form>
                                        <Input
                                            labelName={"Min"}
                                            placehoder={"Min Price"}
                                            type={"number"}
                                            name={"min"}
                                            handleOnchange={(e) =>
                                                handledPriceChange(
                                                    "min",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <Input
                                            labelName={"Max"}
                                            placehoder={"Max Price"}
                                            type={"number"}
                                            name={"max"}
                                            handleOnchange={(e) =>
                                                handledPriceChange(
                                                    "max",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <Button label="Save Option" />
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="sort-options">
                            <h4>Sort By</h4>
                            <p>Price</p>
                        </div>
                    </article>
                }
            </div>
            <main className={styles["main"]}>
                <div className={`${styles["product-container"]}`}>
                    {filteredData.map((data) => {
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
