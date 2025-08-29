import styles from "./contact.module.css";
import Input from "../../components/input";
import Button from "../../components/button";
import { Form } from "react-router-dom";
// import image from "../../assets/images/logo.png"

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
            <div className="contact-content">
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
                        <label>
                            <h4>Message</h4>
                            <textarea
                                name="message"
                                cols={10}
                                rows={5}
                            ></textarea>
                        </label>
                        <Button label="Send Message" />
                    </Form>
                </div>
                <div className={styles["social-media-icons"]}>
                    <div className={styles["icon"]}></div>
                    <div className={styles["icon"]}></div>
                    <div className={styles["icon"]}></div>
                    <div className={styles["icon"]}></div>
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
                                manufacturer's waranty (6-12months){" "}
                            </p>
                        </details>
                        <details>
                            <summary>
                                Do your product come with waranty?
                            </summary>
                            <p>
                                Yes! All our electronics come with a standard
                                manufacturer's waranty (6-12months){" "}
                            </p>
                        </details>
                        <details>
                            <summary>
                                Do your product come with waranty?
                            </summary>
                            <p>
                                Yes! All our electronics come with a standard
                                manufacturer's waranty (6-12months){" "}
                            </p>
                        </details>
                    </div>
                    <div className={styles["answer"]}></div>
                </div>
            </div>
        </section>
    );
}
