import indexStyles from "../../index.module.css";
import styles from "./home.module.css";
import Button from "../../components/button";
import Input from "../../components/input";

export default function Home() {
    return (
        <section className={`${indexStyles["page"]} ${styles["home-page"]}`}>
            <div className={styles["user-options-cont"]}>
                <h3>More Options </h3>
                <div className={styles["user-options"]}>
                    <div className={styles["filter-options"]}>
                        <h4>Filter By</h4>
                        <div
                            className={`${styles["filter-category"]} ${styles["option"]}`}
                        >
                            <h4>Category</h4>
                            <div className={styles["filter-chips"]}>
                                <Button label={"All"} />
                                <Button label={"TV"} />
                                <Button label={"Phones"} />
                                <Button label={"Laptop"} />
                                <Button label={"HeadPhones"} />
                            </div>
                        </div>
                        <div
                            className={`${styles["filter-brand"]} ${styles["option"]}`}
                        >
                            <h4>Brand</h4>
                            <div className={styles["filter-chips"]}>
                                <Button label={"Techno"} />
                                <Button label={"RedMi"} />
                                <Button label={"Apple"} />
                                <Button label={"Techno"} />
                                <Button label={"Samsung"} />
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
                </div>
            </div>
        </section>
    );
}
