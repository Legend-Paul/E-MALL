import styles from "./footer.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Footer() {
    return (
        <footer className={styles["footer-styles"]}>
            <div className={styles["footer-content"]}>
                <div className={styles["image-container"]}>
                    <NavLink to="/">
                        <img src={logo} alt="logo image" />
                    </NavLink>
                </div>
                <div className={styles["footer-section"]}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className={styles["footer-section"]}>
                    <h3>Follow Us</h3>
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
                <div className={styles["footer-section"]}>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>
                            <i className="bi bi-envelope-fill"></i>
                            <Link to="mailto:qamunyap950@gnail.com">
                                qamunyap950@gmail.com
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className={styles["icon"]}>
                                <i className="bi bi-whatsapp"></i>
                                <p>+2547 08 521 286</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="tel:+1234567890">
                                {" "}
                                <i className="bi bi-telephone-fill"></i>{" "}
                                <p>+123 456 7890</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={"#"}>
                                <i className="bi bi-geo-alt-fill"></i>
                                <p> Nyeri, Country</p>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles["footer-bottom"]}>
                    <p>
                        &copy; {new Date().getFullYear()} Your Company. All
                        rights reserved.
                    </p>
                    <p>Privacy policy </p>
                    <p>Terms of Service</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </footer>
    );
}
