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
    const filterOption = searchParams.get("filter-by");
    const maxPriceFilter = searchParams.get("max-price");
    const minPriceFilter = searchParams.get("min-price");

    const data = useLoaderData();
    const [isFilterOptionOpen, setIsFilterOptionOpen] = useState(false);
    const [activeChip, setActiveChip] = useState(
        filterOption ? filterOption : "All"
    );

    const filterOptions = [
        "All",
        "Men's clothing",
        "Women's clothing",
        "Electronics",
        "Jewelery",
    ];

    let filteredData = filterOption
        ? data.filter(
              (dataObj) => dataObj.category === filterOption.toLocaleLowerCase()
          )
        : data;

    filteredData =
        maxPriceFilter || minPriceFilter
            ? getFilterPriceRange(filteredData, minPriceFilter, maxPriceFilter)
            : filteredData;
    function handleFilterSetting(filterName, type, value) {
        type === "filter-by" ? setActiveChip(filterName) : null;
        setSearchParams((prevParam) => {
            if (!value) {
                prevParam.delete(type);
            } else {
                prevParam.set(type, value);
            }
            return prevParam;
        });
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

                <article
                    className={`${styles["user-options"]} ${
                        isFilterOptionOpen
                            ? styles["open-options"]
                            : styles["hide-options"]
                    }`}
                >
                    <div className={styles["filter-options"]}>
                        <h3>
                            <i class="bi bi-funnel-fill me-2"></i> Filter By
                        </h3>

                        <div
                            className={`${styles["filter-by"]} ${styles["option"]}`}
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
                                            handleFilterSetting(
                                                category,

                                                "filter-by",
                                                category === "All"
                                                    ? null
                                                    : category
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
                                <Input
                                    labelName={"Min"}
                                    placehoder={"Min Price"}
                                    type={"number"}
                                    value={minPriceFilter ? minPriceFilter : ""}
                                    name={"min"}
                                    handleOnchange={(e) =>
                                        handleFilterSetting(
                                            null,
                                            "min-price",
                                            Number(e.target.value)
                                        )
                                    }
                                />
                                <Input
                                    labelName={"Max"}
                                    placehoder={"Max Price"}
                                    type={"number"}
                                    value={maxPriceFilter ? maxPriceFilter : ""}
                                    name={"max"}
                                    handleOnchange={(e) =>
                                        handleFilterSetting(
                                            null,
                                            "max-price",
                                            Number(e.target.value)
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sort-options">
                        <h3>
                            <i class="bi bi-sort-down-alt me-2"></i> Sort By
                        </h3>
                        <p>Price</p>
                    </div>
                </article>
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
                                    <Link
                                        to={`/${data.id}`}
                                        state={{
                                            searchParams: `?${searchParams.toString()}`,
                                        }}
                                    >
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
