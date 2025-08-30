import styles from "./contact.module.css";
import Input from "../../components/input";
import Button from "../../components/button";
import { Form, Link } from "react-router-dom";
import Textarea from "../../components/textarea";

export default function Contact() {
    return (
        <section className={`${styles["contact-page"]}`}>
            <div className={styles["heading-container"]}>
                <div className={styles["heading"]}>
                    <h2>What't on your mind?</h2>
                    <p>
                        Drop your feedback, thoughts or question. Let's biuld
                        something greate together
                    </p>
                </div>
            </div>
            <div className={styles["contact-content"]}>
                <div className={styles["form-container"]}>
                    <Form method="POST">
                        <Input
                            labelName={"Username"}
                            name={"username"}
                            placehoder={"Paul"}
                        />
                        <Input
                            labelName={"Email"}
                            type={"email"}
                            name={"email"}
                            placehoder={"example@gmail.com"}
                        />
                        <Textarea
                            labelName={"Message"}
                            placehoder={"Enter message"}
                            name={"message"}
                        />
                        <Button label="Send Message" color="secondary" />
                    </Form>
                </div>
                <div className={styles["social-media-icons"]}>
                    <h3>Follow us </h3>
                    <ul className={styles["social-icons"]}>
                        <li>
                            <Link to="#" className={styles["icon"]}>
                                <i className="bi bi-facebook"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className={styles["icon"]}>
                                <i className="bi bi-twitter"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className={styles["icon"]}>
                                <i className="bi bi-instagram"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className={styles["icon"]}>
                                <i className="bi bi-linkedin"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className={styles["icon"]}>
                                <i className="bi bi-github"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles["f-a-q"]}>
                    <div className={styles["questions"]}>
                        <h3>F A Q</h3>
                        <details>
                            <summary>
                                Do your product come with waranty?
                            </summary>
                            <p>
                                <em>
                                    Yes! All our electronics come with a
                                    standard manufacturer's waranty (6-12months){" "}
                                </em>
                            </p>
                        </details>
                        <details>
                            <summary>
                                Do your product come with waranty?
                            </summary>
                            <p>
                                Yes! All our electronics come with a standard
                                manufacturer's waranty (6-12months). Some
                                products also include extended waranty options
                                at check out.{" "}
                            </p>
                        </details>
                        <details>
                            <summary>How long does shipping take?</summary>
                            <p>
                                Orders are processed within 24 hours. Standard
                                delivery takes 3-5 bussines day, while express
                                shipping are availabel at checkkout.
                            </p>
                        </details>
                        <details>
                            <summary>
                                What payment methods do you accept?
                            </summary>
                            <p>
                                We accept all major credit cards (Visa,
                                MasterCard, American Express), PayPal, and Apple
                                Pay. All transactions are secured and encrypted
                                for your safety.
                            </p>
                        </details>
                        <details>
                            <summary>Can I track my order?</summary>
                            <p>
                                Yes! Once your order is shipped, you will
                                receive a confirmation email with a tracking
                                number and link to track your package in real
                                time.
                            </p>
                        </details>
                        <details>
                            <summary>What is your return policy?</summary>
                            <p>
                                We offer a 30-day return policy on most items.
                                Items must be in original condition and
                                packaging. Some restrictions may apply, so
                                please check our return policy page for details.
                            </p>
                        </details>
                    </div>
                    <div className={styles["answer"]}></div>
                </div>
            </div>
        </section>
    );
}
